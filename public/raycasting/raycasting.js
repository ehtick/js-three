import { V as Vector3, M as MathUtils, Q as Quaternion, a as Matrix4, R as Raycaster, S as Scene, P as PerspectiveCamera, E as Euler, W as WebGLRenderer, b as PCFSoftShadowMap, s as sRGBEncoding, H as HemisphereLight, D as DirectionalLight, L as Loader, c as Vector2, G as GridHelper, A as AxesHelper, d as Mesh, C as CylinderGeometry, e as MeshMatcapMaterial } from './vendor-681fdc30.js';

/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const LOADER_OPTIONS = {
    apiKey: "AIzaSyD8xiaVPWB02OeQkJOenLiJzdeUHzlhu00",
    version: "beta",
    libraries: [],
};

/**
 * Copyright 2021 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// shorthands for math-functions, makes equations more readable
const { atan, cos, exp, log, tan, PI } = Math;
const { degToRad, radToDeg } = MathUtils;
const EARTH_RADIUS = 6371010.0;
/**
 * Converts any of the supported position formats into the
 * google.maps.LatLngAltitudeLiteral format used for the calculations.
 * @param point
 */
function toLatLngAltitudeLiteral(point) {
    if (window.google &&
        google.maps &&
        (point instanceof google.maps.LatLng ||
            point instanceof google.maps.LatLngAltitude)) {
        return { altitude: 0, ...point.toJSON() };
    }
    return { altitude: 0, ...point };
}
/**
 * Converts latitude and longitude to world space coordinates relative
 * to a reference location with y up.
 */
function latLngToVector3Relative(point, reference, target = new Vector3()) {
    const [px, py] = latLngToXY(point);
    const [rx, ry] = latLngToXY(reference);
    target.set(px - rx, py - ry, 0);
    // apply the spherical mercator scale-factor for the reference latitude
    target.multiplyScalar(cos(degToRad(reference.lat)));
    target.z = point.altitude - reference.altitude;
    return target;
}
/**
 * Converts WGS84 latitude and longitude to (uncorrected) WebMercator meters.
 * (WGS84 --> WebMercator (EPSG:3857))
 */
function latLngToXY(position) {
    return [
        EARTH_RADIUS * degToRad(position.lng),
        EARTH_RADIUS * log(tan(0.25 * PI + 0.5 * degToRad(position.lat))),
    ];
}

/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const DEFAULT_UP = new Vector3(0, 0, 1);
/* eslint-disable @typescript-eslint/no-empty-function */
/**
 * Add a [three.js](https://threejs.org) scene as a [Google Maps WebGLOverlayView](http://goo.gle/WebGLOverlayView-ref).
 */
class ThreeJSOverlayView {
    constructor(options = {}) {
        /** {@inheritDoc ThreeJSOverlayViewOptions.animationMode} */
        this.animationMode = "ondemand";
        this.rotationArray = new Float32Array(3);
        this.rotationInverse = new Quaternion();
        this.projectionMatrixInverse = new Matrix4();
        this.raycaster = new Raycaster();
        const { anchor = { lat: 0, lng: 0, altitude: 0 }, upAxis = "Z", scene, map, animationMode = "ondemand", addDefaultLighting = true, } = options;
        this.overlay = new google.maps.WebGLOverlayView();
        this.renderer = null;
        this.camera = null;
        this.animationMode = animationMode;
        this.setAnchor(anchor);
        this.setUpAxis(upAxis);
        this.scene = scene ?? new Scene();
        if (addDefaultLighting)
            this.initSceneLights();
        this.overlay.onAdd = this.onAdd.bind(this);
        this.overlay.onRemove = this.onRemove.bind(this);
        this.overlay.onContextLost = this.onContextLost.bind(this);
        this.overlay.onContextRestored = this.onContextRestored.bind(this);
        this.overlay.onStateUpdate = this.onStateUpdate.bind(this);
        this.overlay.onDraw = this.onDraw.bind(this);
        this.camera = new PerspectiveCamera();
        if (map) {
            this.setMap(map);
        }
    }
    /**
     * Sets the anchor-point.
     * @param anchor
     */
    setAnchor(anchor) {
        this.anchor = toLatLngAltitudeLiteral(anchor);
    }
    /**
     * Sets the axis to use as "up" in the scene.
     * @param axis
     */
    setUpAxis(axis) {
        const upVector = new Vector3(0, 0, 1);
        if (typeof axis !== "string") {
            upVector.copy(axis);
        }
        else {
            if (axis.toLowerCase() === "y") {
                upVector.set(0, 1, 0);
            }
            else if (axis.toLowerCase() !== "z") {
                console.warn(`invalid value '${axis}' specified as upAxis`);
            }
        }
        upVector.normalize();
        const q = new Quaternion();
        q.setFromUnitVectors(upVector, DEFAULT_UP);
        // inverse rotation is needed in latLngAltitudeToVector3()
        this.rotationInverse.copy(q).invert();
        // copy to rotationArray for transformer.fromLatLngAltitude()
        const euler = new Euler().setFromQuaternion(q, "XYZ");
        this.rotationArray[0] = MathUtils.radToDeg(euler.x);
        this.rotationArray[1] = MathUtils.radToDeg(euler.y);
        this.rotationArray[2] = MathUtils.radToDeg(euler.z);
    }
    // implemetation
    raycast(p, optionsOrObjects, options = {}) {
        let objects;
        if (Array.isArray(optionsOrObjects)) {
            objects = optionsOrObjects || null;
        }
        else {
            objects = [this.scene];
            options = { ...optionsOrObjects, recursive: true };
        }
        const { updateMatrix = true, recursive = false, raycasterParameters, } = options;
        // when `raycast()` is called from within the `onBeforeRender()` callback,
        // the mvp-matrix for this frame has already been computed and stored in
        // `this.camera.projectionMatrix`.
        // The mvp-matrix transforms world-space meters to clip-space
        // coordinates. The inverse matrix created here does the exact opposite
        // and converts clip-space coordinates to world-space.
        if (updateMatrix) {
            this.projectionMatrixInverse.copy(this.camera.projectionMatrix).invert();
        }
        // create two points (with different depth) from the mouse-position and
        // convert them into world-space coordinates to set up the ray.
        this.raycaster.ray.origin
            .set(p.x, p.y, 0)
            .applyMatrix4(this.projectionMatrixInverse);
        this.raycaster.ray.direction
            .set(p.x, p.y, 0.5)
            .applyMatrix4(this.projectionMatrixInverse)
            .sub(this.raycaster.ray.origin)
            .normalize();
        // back up the raycaster parameters
        const oldRaycasterParams = this.raycaster.params;
        if (raycasterParameters) {
            this.raycaster.params = raycasterParameters;
        }
        const results = this.raycaster.intersectObjects(objects, recursive);
        // reset raycaster params to whatever they were before
        this.raycaster.params = oldRaycasterParams;
        return results;
    }
    /**
     * Overwrite this method to handle any GL state updates outside the
     * render animation frame.
     * @param options
     */
    onStateUpdate(options) { }
    /**
     * Overwrite this method to fetch or create intermediate data structures
     * before the overlay is drawn that don’t require immediate access to the
     * WebGL rendering context.
     */
    onAdd() { }
    /**
     * Overwrite this method to update your scene just before a new frame is
     * drawn.
     */
    onBeforeDraw() { }
    /**
     * This method is called when the overlay is removed from the map with
     * `overlay.setMap(null)`, and is where you can remove all intermediate
     * objects created in onAdd.
     */
    onRemove() { }
    /**
     * Triggers the map to update GL state.
     */
    requestStateUpdate() {
        this.overlay.requestStateUpdate();
    }
    /**
     * Triggers the map to redraw a frame.
     */
    requestRedraw() {
        this.overlay.requestRedraw();
    }
    /**
     * Returns the map the overlay is added to.
     */
    getMap() {
        return this.overlay.getMap();
    }
    /**
     * Adds the overlay to the map.
     * @param map The map to access the div, model and view state.
     */
    setMap(map) {
        this.overlay.setMap(map);
    }
    /**
     * Adds the given listener function to the given event name. Returns an
     * identifier for this listener that can be used with
     * <code>google.maps.event.removeListener</code>.
     */
    addListener(eventName, handler) {
        return this.overlay.addListener(eventName, handler);
    }
    /**
     * This method is called once the rendering context is available. Use it to
     * initialize or bind any WebGL state such as shaders or buffer objects.
     * @param options that allow developers to restore the GL context.
     */
    onContextRestored({ gl }) {
        this.renderer = new WebGLRenderer({
            canvas: gl.canvas,
            context: gl,
            ...gl.getContextAttributes(),
        });
        this.renderer.autoClear = false;
        this.renderer.autoClearDepth = false;
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = PCFSoftShadowMap;
        // LinearEncoding is default for historical reasons
        // https://discourse.threejs.org/t/linearencoding-vs-srgbencoding/23243
        this.renderer.outputEncoding = sRGBEncoding;
        const { width, height } = gl.canvas;
        this.renderer.setViewport(0, 0, width, height);
    }
    /**
     * This method is called when the rendering context is lost for any reason,
     * and is where you should clean up any pre-existing GL state, since it is
     * no longer needed.
     */
    onContextLost() {
        if (!this.renderer) {
            return;
        }
        this.renderer.dispose();
        this.renderer = null;
    }
    /**
     * Implement this method to draw WebGL content directly on the map. Note
     * that if the overlay needs a new frame drawn then call {@link
     * ThreeJSOverlayView.requestRedraw}.
     * @param options that allow developers to render content to an associated
     *     Google basemap.
     */
    onDraw({ gl, transformer }) {
        this.camera.projectionMatrix.fromArray(transformer.fromLatLngAltitude(this.anchor, this.rotationArray));
        gl.disable(gl.SCISSOR_TEST);
        this.onBeforeDraw();
        this.renderer.render(this.scene, this.camera);
        this.renderer.resetState();
        if (this.animationMode === "always")
            this.requestRedraw();
    }
    /**
     * Convert coordinates from WGS84 Latitude Longitude to world-space
     * coordinates while taking the origin and orientation into account.
     */
    latLngAltitudeToVector3(position, target = new Vector3()) {
        latLngToVector3Relative(toLatLngAltitudeLiteral(position), this.anchor, target);
        target.applyQuaternion(this.rotationInverse);
        return target;
    }
    // MVCObject interface forwarded to the overlay
    /**
     * Binds a View to a Model.
     */
    bindTo(key, target, targetKey, noNotify) {
        this.overlay.bindTo(key, target, targetKey, noNotify);
    }
    /**
     * Gets a value.
     */
    get(key) {
        return this.overlay.get(key);
    }
    /**
     * Notify all observers of a change on this property. This notifies both
     * objects that are bound to the object's property as well as the object
     * that it is bound to.
     */
    notify(key) {
        this.overlay.notify(key);
    }
    /**
     * Sets a value.
     */
    set(key, value) {
        this.overlay.set(key, value);
    }
    /**
     * Sets a collection of key-value pairs.
     */
    setValues(values) {
        this.overlay.setValues(values);
    }
    /**
     * Removes a binding. Unbinding will set the unbound property to the current
     * value. The object will not be notified, as the value has not changed.
     */
    unbind(key) {
        this.overlay.unbind(key);
    }
    /**
     * Removes all bindings.
     */
    unbindAll() {
        this.overlay.unbindAll();
    }
    /**
     * Creates lights (directional and hemisphere light) to illuminate the model
     * (roughly approximates the lighting of buildings in maps)
     */
    initSceneLights() {
        const hemiLight = new HemisphereLight(0xffffff, 0x444444, 1);
        hemiLight.position.set(0, -0.2, 1).normalize();
        const dirLight = new DirectionalLight(0xffffff);
        dirLight.position.set(0, 10, 100);
        this.scene.add(hemiLight, dirLight);
    }
}

/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// the corners of the field in the Levi’s Stadium in Santa Clara
const coordinates = [
    { lng: -121.9702904, lat: 37.4034362 },
    { lng: -121.9698018, lat: 37.4027095 },
    { lng: -121.9693109, lat: 37.402918 },
    { lng: -121.969804, lat: 37.4036465 },
];
const center = { lng: -121.9698032, lat: 37.4031777, altitude: 0 };
const DEFAULT_COLOR = 0xffffff;
const HIGHLIGHT_COLOR = 0xff0000;
const mapOptions = {
    center,
    mapId: "7057886e21226ff7",
    zoom: 18,
    tilt: 67.5,
    disableDefaultUI: true,
    backgroundColor: "transparent",
    gestureHandling: "greedy",
};
new Loader(LOADER_OPTIONS).load().then(() => {
    // create the map and overlay
    const map = new google.maps.Map(document.getElementById("map"), mapOptions);
    const overlay = new ThreeJSOverlayView({ map, anchor: center, upAxis: "Y" });
    const mapDiv = map.getDiv();
    const mousePosition = new Vector2();
    map.addListener("mousemove", (ev) => {
        const domEvent = ev.domEvent;
        const { left, top, width, height } = mapDiv.getBoundingClientRect();
        const x = domEvent.clientX - left;
        const y = domEvent.clientY - top;
        mousePosition.x = 2 * (x / width) - 1;
        mousePosition.y = 1 - 2 * (y / height);
        // since the actual raycasting is performed when the next frame is
        // rendered, we have to make sure that it will be called for the next frame.
        overlay.requestRedraw();
    });
    // grid- and axes helpers to help with the orientation
    const grid = new GridHelper(1);
    grid.rotation.y = MathUtils.degToRad(28.1);
    grid.scale.set(48.8, 0, 91.44);
    overlay.scene.add(grid);
    overlay.scene.add(new AxesHelper(20));
    const meshes = coordinates.map((p) => {
        const mesh = new Mesh(new CylinderGeometry(2, 1, 20, 24, 1), new MeshMatcapMaterial());
        mesh.geometry.translate(0, mesh.geometry.parameters.height / 2, 0);
        overlay.latLngAltitudeToVector3(p, mesh.position);
        overlay.scene.add(mesh);
        return mesh;
    });
    let highlightedObject = null;
    overlay.onBeforeDraw = () => {
        const intersections = overlay.raycast(mousePosition, meshes, {
            recursive: false,
        });
        if (highlightedObject) {
            // when there's a previously highlighted object, reset the highlighting
            highlightedObject.material.color.setHex(DEFAULT_COLOR);
        }
        if (intersections.length === 0) {
            // reset default cursor when no object is under the cursor
            map.setOptions({ draggableCursor: null });
            highlightedObject = null;
            return;
        }
        // change the color of the object and update the map-cursor to indicate
        // the object is clickable.
        highlightedObject = intersections[0].object;
        highlightedObject.material.color.setHex(HIGHLIGHT_COLOR);
        map.setOptions({ draggableCursor: "pointer" });
    };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF5Y2FzdGluZy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vZXhhbXBsZXMvY29uZmlnLnRzIiwiLi4vLi4vc3JjL3V0aWwudHMiLCIuLi8uLi9zcmMvdGhyZWUudHMiLCIuLi8uLi9leGFtcGxlcy9yYXljYXN0aW5nLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IDIwMjEgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgTG9hZGVyT3B0aW9ucyB9IGZyb20gXCJAZ29vZ2xlbWFwcy9qcy1hcGktbG9hZGVyXCI7XG5cbmV4cG9ydCBjb25zdCBNQVBfSUQgPSBcIjdiOWE4OTdhY2QwYTYzYTRcIjtcblxuZXhwb3J0IGNvbnN0IExPQURFUl9PUFRJT05TOiBMb2FkZXJPcHRpb25zID0ge1xuICBhcGlLZXk6IFwiQUl6YVN5RDh4aWFWUFdCMDJPZVFrSk9lbkxpSnpkZVVIemxodTAwXCIsXG4gIHZlcnNpb246IFwiYmV0YVwiLFxuICBsaWJyYXJpZXM6IFtdLFxufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IDIwMjEgR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IE1hdGhVdGlscywgVmVjdG9yMyB9IGZyb20gXCJ0aHJlZVwiO1xuXG5leHBvcnQgdHlwZSBMYXRMbmdUeXBlcyA9XG4gIHwgZ29vZ2xlLm1hcHMuTGF0TG5nTGl0ZXJhbFxuICB8IGdvb2dsZS5tYXBzLkxhdExuZ1xuICB8IGdvb2dsZS5tYXBzLkxhdExuZ0FsdGl0dWRlTGl0ZXJhbFxuICB8IGdvb2dsZS5tYXBzLkxhdExuZ0FsdGl0dWRlO1xuXG4vLyBzaG9ydGhhbmRzIGZvciBtYXRoLWZ1bmN0aW9ucywgbWFrZXMgZXF1YXRpb25zIG1vcmUgcmVhZGFibGVcbmNvbnN0IHsgYXRhbiwgY29zLCBleHAsIGxvZywgdGFuLCBQSSB9ID0gTWF0aDtcbmNvbnN0IHsgZGVnVG9SYWQsIHJhZFRvRGVnIH0gPSBNYXRoVXRpbHM7XG5cbmV4cG9ydCBjb25zdCBFQVJUSF9SQURJVVMgPSA2MzcxMDEwLjA7XG5leHBvcnQgY29uc3QgV09STERfU0laRSA9IE1hdGguUEkgKiBFQVJUSF9SQURJVVM7XG5cbi8qKlxuICogQ29udmVydHMgYW55IG9mIHRoZSBzdXBwb3J0ZWQgcG9zaXRpb24gZm9ybWF0cyBpbnRvIHRoZVxuICogZ29vZ2xlLm1hcHMuTGF0TG5nQWx0aXR1ZGVMaXRlcmFsIGZvcm1hdCB1c2VkIGZvciB0aGUgY2FsY3VsYXRpb25zLlxuICogQHBhcmFtIHBvaW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0xhdExuZ0FsdGl0dWRlTGl0ZXJhbChcbiAgcG9pbnQ6IExhdExuZ1R5cGVzXG4pOiBnb29nbGUubWFwcy5MYXRMbmdBbHRpdHVkZUxpdGVyYWwge1xuICBpZiAoXG4gICAgd2luZG93Lmdvb2dsZSAmJlxuICAgIGdvb2dsZS5tYXBzICYmXG4gICAgKHBvaW50IGluc3RhbmNlb2YgZ29vZ2xlLm1hcHMuTGF0TG5nIHx8XG4gICAgICBwb2ludCBpbnN0YW5jZW9mIGdvb2dsZS5tYXBzLkxhdExuZ0FsdGl0dWRlKVxuICApIHtcbiAgICByZXR1cm4geyBhbHRpdHVkZTogMCwgLi4ucG9pbnQudG9KU09OKCkgfTtcbiAgfVxuXG4gIHJldHVybiB7IGFsdGl0dWRlOiAwLCAuLi4ocG9pbnQgYXMgZ29vZ2xlLm1hcHMuTGF0TG5nTGl0ZXJhbCkgfTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBsYXRpdHVkZSBhbmQgbG9uZ2l0dWRlIHRvIHdvcmxkIHNwYWNlIGNvb3JkaW5hdGVzIHJlbGF0aXZlXG4gKiB0byBhIHJlZmVyZW5jZSBsb2NhdGlvbiB3aXRoIHkgdXAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsYXRMbmdUb1ZlY3RvcjNSZWxhdGl2ZShcbiAgcG9pbnQ6IGdvb2dsZS5tYXBzLkxhdExuZ0FsdGl0dWRlTGl0ZXJhbCxcbiAgcmVmZXJlbmNlOiBnb29nbGUubWFwcy5MYXRMbmdBbHRpdHVkZUxpdGVyYWwsXG4gIHRhcmdldCA9IG5ldyBWZWN0b3IzKClcbikge1xuICBjb25zdCBbcHgsIHB5XSA9IGxhdExuZ1RvWFkocG9pbnQpO1xuICBjb25zdCBbcngsIHJ5XSA9IGxhdExuZ1RvWFkocmVmZXJlbmNlKTtcblxuICB0YXJnZXQuc2V0KHB4IC0gcngsIHB5IC0gcnksIDApO1xuXG4gIC8vIGFwcGx5IHRoZSBzcGhlcmljYWwgbWVyY2F0b3Igc2NhbGUtZmFjdG9yIGZvciB0aGUgcmVmZXJlbmNlIGxhdGl0dWRlXG4gIHRhcmdldC5tdWx0aXBseVNjYWxhcihjb3MoZGVnVG9SYWQocmVmZXJlbmNlLmxhdCkpKTtcblxuICB0YXJnZXQueiA9IHBvaW50LmFsdGl0dWRlIC0gcmVmZXJlbmNlLmFsdGl0dWRlO1xuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbi8qKlxuICogQ29udmVydHMgV0dTODQgbGF0aXR1ZGUgYW5kIGxvbmdpdHVkZSB0byAodW5jb3JyZWN0ZWQpIFdlYk1lcmNhdG9yIG1ldGVycy5cbiAqIChXR1M4NCAtLT4gV2ViTWVyY2F0b3IgKEVQU0c6Mzg1NykpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsYXRMbmdUb1hZKHBvc2l0aW9uOiBnb29nbGUubWFwcy5MYXRMbmdMaXRlcmFsKTogbnVtYmVyW10ge1xuICByZXR1cm4gW1xuICAgIEVBUlRIX1JBRElVUyAqIGRlZ1RvUmFkKHBvc2l0aW9uLmxuZyksXG4gICAgRUFSVEhfUkFESVVTICogbG9nKHRhbigwLjI1ICogUEkgKyAwLjUgKiBkZWdUb1JhZChwb3NpdGlvbi5sYXQpKSksXG4gIF07XG59XG5cbi8qKlxuICogQ29udmVydHMgV2ViTWVyY2F0b3IgbWV0ZXJzIHRvIFdHUzg0IGxhdGl0dWRlL2xvbmdpdHVkZS5cbiAqIChXZWJNZXJjYXRvciAoRVBTRzozODU3KSAtLT4gV0dTODQpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB4eVRvTGF0TG5nKHA6IG51bWJlcltdKTogZ29vZ2xlLm1hcHMuTGF0TG5nTGl0ZXJhbCB7XG4gIGNvbnN0IFt4LCB5XSA9IHA7XG5cbiAgcmV0dXJuIHtcbiAgICBsYXQ6IHJhZFRvRGVnKFBJICogMC41IC0gMi4wICogYXRhbihleHAoLXkgLyBFQVJUSF9SQURJVVMpKSksXG4gICAgbG5nOiByYWRUb0RlZyh4KSAvIEVBUlRIX1JBRElVUyxcbiAgfTtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IDIwMjEgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHtcbiAgRGlyZWN0aW9uYWxMaWdodCxcbiAgRXVsZXIsXG4gIEhlbWlzcGhlcmVMaWdodCxcbiAgSW50ZXJzZWN0aW9uLFxuICBNYXRoVXRpbHMsXG4gIE1hdHJpeDQsXG4gIE9iamVjdDNELFxuICBQQ0ZTb2Z0U2hhZG93TWFwLFxuICBQZXJzcGVjdGl2ZUNhbWVyYSxcbiAgUXVhdGVybmlvbixcbiAgUmF5Y2FzdGVyLFxuICBSYXljYXN0ZXJQYXJhbWV0ZXJzLFxuICBTY2VuZSxcbiAgc1JHQkVuY29kaW5nLFxuICBWZWN0b3IyLFxuICBWZWN0b3IzLFxuICBXZWJHTFJlbmRlcmVyLFxufSBmcm9tIFwidGhyZWVcIjtcbmltcG9ydCB7IGxhdExuZ1RvVmVjdG9yM1JlbGF0aXZlLCB0b0xhdExuZ0FsdGl0dWRlTGl0ZXJhbCB9IGZyb20gXCIuL3V0aWxcIjtcblxuaW1wb3J0IHR5cGUgeyBMYXRMbmdUeXBlcyB9IGZyb20gXCIuL3V0aWxcIjtcblxuY29uc3QgREVGQVVMVF9VUCA9IG5ldyBWZWN0b3IzKDAsIDAsIDEpO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJheWNhc3RPcHRpb25zIHtcbiAgLyoqXG4gICAqIFNldCB0byB0cnVlIHRvIGFsc28gdGVzdCBjaGlsZHJlbiBvZiB0aGUgc3BlY2lmaWVkIG9iamVjdHMgZm9yXG4gICAqIGludGVyc2VjdGlvbnMuXG4gICAqXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICByZWN1cnNpdmU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBVcGRhdGUgdGhlIGludmVyc2UtcHJvamVjdGlvbi1tYXRyaXggYmVmb3JlIGNhc3RpbmcgdGhlIHJheSAoc2V0IHRoaXNcbiAgICogdG8gZmFsc2UgaWYgeW91IG5lZWQgdG8gcnVuIG11bHRpcGxlIHJheWNhc3RzIGZvciB0aGUgc2FtZSBmcmFtZSkuXG4gICAqXG4gICAqIEBkZWZhdWx0IHRydWVcbiAgICovXG4gIHVwZGF0ZU1hdHJpeD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEFkZGl0aW9uYWwgcGFyYW1ldGVycyB0byBwYXNzIHRvIHRoZSB0aHJlZS5qcyByYXljYXN0ZXIuXG4gICAqXG4gICAqIEBzZWUgaHR0cHM6Ly90aHJlZWpzLm9yZy9kb2NzLyNhcGkvZW4vY29yZS9SYXljYXN0ZXIucGFyYW1zXG4gICAqL1xuICByYXljYXN0ZXJQYXJhbWV0ZXJzPzogUmF5Y2FzdGVyUGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUaHJlZUpTT3ZlcmxheVZpZXdPcHRpb25zIHtcbiAgLyoqXG4gICAqIFRoZSBhbmNob3IgZm9yIHRoZSBzY2VuZS5cbiAgICpcbiAgICogQGRlZmF1bHQge2xhdDogMCwgbG5nOiAwLCBhbHRpdHVkZTogMH1cbiAgICovXG4gIGFuY2hvcj86IExhdExuZ1R5cGVzO1xuXG4gIC8qKlxuICAgKiBUaGUgYXhpcyBwb2ludGluZyB1cCBpbiB0aGUgc2NlbmUuIENhbiBiZSBzcGVjaWZpZWQgYXMgXCJaXCIsIFwiWVwiIG9yIGFcbiAgICogVmVjdG9yMywgaW4gd2hpY2ggY2FzZSB0aGUgbm9ybWFsaXplZCB2ZWN0b3Igd2lsbCBiZWNvbWUgdGhlIHVwLWF4aXMuXG4gICAqXG4gICAqIEBkZWZhdWx0IFwiWlwiXG4gICAqL1xuICB1cEF4aXM/OiBcIlpcIiB8IFwiWVwiIHwgVmVjdG9yMztcblxuICAvKipcbiAgICogVGhlIG1hcCB0aGUgb3ZlcmxheSB3aWxsIGJlIGFkZGVkIHRvLlxuICAgKiBDYW4gYmUgc2V0IGF0IGluaXRpYWxpemF0aW9uIG9yIGJ5IGNhbGxpbmcgYHNldE1hcChtYXApYC5cbiAgICovXG4gIG1hcD86IGdvb2dsZS5tYXBzLk1hcDtcblxuICAvKipcbiAgICogVGhlIHNjZW5lIG9iamVjdCB0byByZW5kZXIgaW4gdGhlIG92ZXJsYXkuIElmIG5vIHNjZW5lIGlzIHNwZWNpZmllZCwgYVxuICAgKiBuZXcgc2NlbmUgaXMgY3JlYXRlZCBhbmQgY2FuIGJlIGFjY2Vzc2VkIHZpYSBgb3ZlcmxheS5zY2VuZWAuXG4gICAqL1xuICBzY2VuZT86IFNjZW5lO1xuXG4gIC8qKlxuICAgKiBUaGUgYW5pbWF0aW9uIG1vZGUgY29udHJvbHMgd2hlbiB0aGUgb3ZlcmxheSB3aWxsIHJlZHJhdywgZWl0aGVyXG4gICAqIGNvbnRpbnVvdXNseSAoYGFsd2F5c2ApIG9yIG9uIGRlbWFuZCAoYG9uZGVtYW5kYCkuIFdoZW4gdXNpbmcgdGhlXG4gICAqIG9uIGRlbWFuZCBtb2RlLCB0aGUgb3ZlcmxheSB3aWxsIHJlLXJlbmRlciB3aGVuZXZlciB0aGUgbWFwIHJlbmRlcnNcbiAgICogKGNhbWVyYSBtb3ZlbWVudHMpIG9yIHdoZW4gYHJlcXVlc3RSZWRyYXcoKWAgaXMgY2FsbGVkLlxuICAgKlxuICAgKiBUbyBhY2hpZXZlIGFuaW1hdGlvbnMgaW4gdGhpcyBtb2RlLCB5b3UgY2FuIGVpdGhlciB1c2UgYW4gb3V0c2lkZVxuICAgKiBhbmltYXRpb24tbG9vcCB0aGF0IGNhbGxzIGByZXF1ZXN0UmVkcmF3KClgIGFzIGxvbmcgYXMgbmVlZGVkIG9yIGNhbGxcbiAgICogYHJlcXVlc3RSZWRyYXcoKWAgZnJvbSB3aXRoaW4gdGhlIGBvbkJlZm9yZVJlbmRlcmAgZnVuY3Rpb24gdG9cbiAgICpcbiAgICogQGRlZmF1bHQgXCJvbmRlbWFuZFwiXG4gICAqL1xuICBhbmltYXRpb25Nb2RlPzogXCJhbHdheXNcIiB8IFwib25kZW1hbmRcIjtcblxuICAvKipcbiAgICogQWRkIGRlZmF1bHQgbGlnaHRpbmcgdG8gdGhlIHNjZW5lLlxuICAgKiBAZGVmYXVsdCB0cnVlXG4gICAqL1xuICBhZGREZWZhdWx0TGlnaHRpbmc/OiBib29sZWFuO1xufVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZW1wdHktZnVuY3Rpb24gKi9cblxuLyoqXG4gKiBBZGQgYSBbdGhyZWUuanNdKGh0dHBzOi8vdGhyZWVqcy5vcmcpIHNjZW5lIGFzIGEgW0dvb2dsZSBNYXBzIFdlYkdMT3ZlcmxheVZpZXddKGh0dHA6Ly9nb28uZ2xlL1dlYkdMT3ZlcmxheVZpZXctcmVmKS5cbiAqL1xuZXhwb3J0IGNsYXNzIFRocmVlSlNPdmVybGF5VmlldyBpbXBsZW1lbnRzIGdvb2dsZS5tYXBzLldlYkdMT3ZlcmxheVZpZXcge1xuICAvKioge0Bpbmhlcml0RG9jIFRocmVlSlNPdmVybGF5Vmlld09wdGlvbnMuc2NlbmV9ICovXG4gIHB1YmxpYyByZWFkb25seSBzY2VuZTogU2NlbmU7XG5cbiAgLyoqIHtAaW5oZXJpdERvYyBUaHJlZUpTT3ZlcmxheVZpZXdPcHRpb25zLmFuaW1hdGlvbk1vZGV9ICovXG4gIHB1YmxpYyBhbmltYXRpb25Nb2RlOiBcImFsd2F5c1wiIHwgXCJvbmRlbWFuZFwiID0gXCJvbmRlbWFuZFwiO1xuXG4gIC8qKiB7QGluaGVyaXREb2MgVGhyZWVKU092ZXJsYXlWaWV3T3B0aW9ucy5hbmNob3J9ICovXG4gIHByb3RlY3RlZCBhbmNob3I6IGdvb2dsZS5tYXBzLkxhdExuZ0FsdGl0dWRlTGl0ZXJhbDtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IGNhbWVyYTogUGVyc3BlY3RpdmVDYW1lcmE7XG4gIHByb3RlY3RlZCByZWFkb25seSByb3RhdGlvbkFycmF5OiBGbG9hdDMyQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KDMpO1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgcm90YXRpb25JbnZlcnNlOiBRdWF0ZXJuaW9uID0gbmV3IFF1YXRlcm5pb24oKTtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IHByb2plY3Rpb25NYXRyaXhJbnZlcnNlID0gbmV3IE1hdHJpeDQoKTtcblxuICBwcm90ZWN0ZWQgcmVhZG9ubHkgb3ZlcmxheTogZ29vZ2xlLm1hcHMuV2ViR0xPdmVybGF5VmlldztcbiAgcHJvdGVjdGVkIHJlbmRlcmVyOiBXZWJHTFJlbmRlcmVyO1xuICBwcm90ZWN0ZWQgcmF5Y2FzdGVyOiBSYXljYXN0ZXIgPSBuZXcgUmF5Y2FzdGVyKCk7XG5cbiAgY29uc3RydWN0b3Iob3B0aW9uczogVGhyZWVKU092ZXJsYXlWaWV3T3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3Qge1xuICAgICAgYW5jaG9yID0geyBsYXQ6IDAsIGxuZzogMCwgYWx0aXR1ZGU6IDAgfSxcbiAgICAgIHVwQXhpcyA9IFwiWlwiLFxuICAgICAgc2NlbmUsXG4gICAgICBtYXAsXG4gICAgICBhbmltYXRpb25Nb2RlID0gXCJvbmRlbWFuZFwiLFxuICAgICAgYWRkRGVmYXVsdExpZ2h0aW5nID0gdHJ1ZSxcbiAgICB9ID0gb3B0aW9ucztcblxuICAgIHRoaXMub3ZlcmxheSA9IG5ldyBnb29nbGUubWFwcy5XZWJHTE92ZXJsYXlWaWV3KCk7XG4gICAgdGhpcy5yZW5kZXJlciA9IG51bGw7XG4gICAgdGhpcy5jYW1lcmEgPSBudWxsO1xuICAgIHRoaXMuYW5pbWF0aW9uTW9kZSA9IGFuaW1hdGlvbk1vZGU7XG5cbiAgICB0aGlzLnNldEFuY2hvcihhbmNob3IpO1xuICAgIHRoaXMuc2V0VXBBeGlzKHVwQXhpcyk7XG5cbiAgICB0aGlzLnNjZW5lID0gc2NlbmUgPz8gbmV3IFNjZW5lKCk7XG4gICAgaWYgKGFkZERlZmF1bHRMaWdodGluZykgdGhpcy5pbml0U2NlbmVMaWdodHMoKTtcblxuICAgIHRoaXMub3ZlcmxheS5vbkFkZCA9IHRoaXMub25BZGQuYmluZCh0aGlzKTtcbiAgICB0aGlzLm92ZXJsYXkub25SZW1vdmUgPSB0aGlzLm9uUmVtb3ZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vdmVybGF5Lm9uQ29udGV4dExvc3QgPSB0aGlzLm9uQ29udGV4dExvc3QuYmluZCh0aGlzKTtcbiAgICB0aGlzLm92ZXJsYXkub25Db250ZXh0UmVzdG9yZWQgPSB0aGlzLm9uQ29udGV4dFJlc3RvcmVkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vdmVybGF5Lm9uU3RhdGVVcGRhdGUgPSB0aGlzLm9uU3RhdGVVcGRhdGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLm92ZXJsYXkub25EcmF3ID0gdGhpcy5vbkRyYXcuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuY2FtZXJhID0gbmV3IFBlcnNwZWN0aXZlQ2FtZXJhKCk7XG5cbiAgICBpZiAobWFwKSB7XG4gICAgICB0aGlzLnNldE1hcChtYXApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBhbmNob3ItcG9pbnQuXG4gICAqIEBwYXJhbSBhbmNob3JcbiAgICovXG4gIHB1YmxpYyBzZXRBbmNob3IoYW5jaG9yOiBMYXRMbmdUeXBlcykge1xuICAgIHRoaXMuYW5jaG9yID0gdG9MYXRMbmdBbHRpdHVkZUxpdGVyYWwoYW5jaG9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBheGlzIHRvIHVzZSBhcyBcInVwXCIgaW4gdGhlIHNjZW5lLlxuICAgKiBAcGFyYW0gYXhpc1xuICAgKi9cbiAgcHVibGljIHNldFVwQXhpcyhheGlzOiBcIllcIiB8IFwiWlwiIHwgVmVjdG9yMyk6IHZvaWQge1xuICAgIGNvbnN0IHVwVmVjdG9yID0gbmV3IFZlY3RvcjMoMCwgMCwgMSk7XG4gICAgaWYgKHR5cGVvZiBheGlzICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICB1cFZlY3Rvci5jb3B5KGF4aXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoYXhpcy50b0xvd2VyQ2FzZSgpID09PSBcInlcIikge1xuICAgICAgICB1cFZlY3Rvci5zZXQoMCwgMSwgMCk7XG4gICAgICB9IGVsc2UgaWYgKGF4aXMudG9Mb3dlckNhc2UoKSAhPT0gXCJ6XCIpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGBpbnZhbGlkIHZhbHVlICcke2F4aXN9JyBzcGVjaWZpZWQgYXMgdXBBeGlzYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdXBWZWN0b3Iubm9ybWFsaXplKCk7XG5cbiAgICBjb25zdCBxID0gbmV3IFF1YXRlcm5pb24oKTtcbiAgICBxLnNldEZyb21Vbml0VmVjdG9ycyh1cFZlY3RvciwgREVGQVVMVF9VUCk7XG5cbiAgICAvLyBpbnZlcnNlIHJvdGF0aW9uIGlzIG5lZWRlZCBpbiBsYXRMbmdBbHRpdHVkZVRvVmVjdG9yMygpXG4gICAgdGhpcy5yb3RhdGlvbkludmVyc2UuY29weShxKS5pbnZlcnQoKTtcblxuICAgIC8vIGNvcHkgdG8gcm90YXRpb25BcnJheSBmb3IgdHJhbnNmb3JtZXIuZnJvbUxhdExuZ0FsdGl0dWRlKClcbiAgICBjb25zdCBldWxlciA9IG5ldyBFdWxlcigpLnNldEZyb21RdWF0ZXJuaW9uKHEsIFwiWFlaXCIpO1xuICAgIHRoaXMucm90YXRpb25BcnJheVswXSA9IE1hdGhVdGlscy5yYWRUb0RlZyhldWxlci54KTtcbiAgICB0aGlzLnJvdGF0aW9uQXJyYXlbMV0gPSBNYXRoVXRpbHMucmFkVG9EZWcoZXVsZXIueSk7XG4gICAgdGhpcy5yb3RhdGlvbkFycmF5WzJdID0gTWF0aFV0aWxzLnJhZFRvRGVnKGV1bGVyLnopO1xuICB9XG5cbiAgLyoqXG4gICAqIFJ1bnMgcmF5Y2FzdGluZyBmb3IgdGhlIHNwZWNpZmllZCBzY3JlZW4tY29vcmRpbmF0ZXMgYWdhaW5zdCBhbGwgb2JqZWN0c1xuICAgKiBpbiB0aGUgc2NlbmUuXG4gICAqXG4gICAqIEBwYXJhbSBwIG5vcm1hbGl6ZWQgc2NyZWVuc3BhY2UgY29vcmRpbmF0ZXMgb2YgdGhlXG4gICAqICAgbW91c2UtY3Vyc29yLiB4L3kgYXJlIGluIHJhbmdlIFstMSwgMV0sIHkgaXMgcG9pbnRpbmcgdXAuXG4gICAqIEBwYXJhbSBvcHRpb25zIHJheWNhc3Rpbmcgb3B0aW9ucy4gSW4gdGhpcyBjYXNlIHRoZSBgcmVjdXJzaXZlYCBvcHRpb25cbiAgICogICBoYXMgbm8gZWZmZWN0IGFzIGl0IGlzIGFsd2F5cyByZWN1cnNpdmUuXG4gICAqIEByZXR1cm4gdGhlIGxpc3Qgb2YgaW50ZXJzZWN0aW9uc1xuICAgKi9cbiAgcHVibGljIHJheWNhc3QocDogVmVjdG9yMiwgb3B0aW9ucz86IFJheWNhc3RPcHRpb25zKTogSW50ZXJzZWN0aW9uW107XG5cbiAgLyoqXG4gICAqIFJ1bnMgcmF5Y2FzdGluZyBmb3IgdGhlIHNwZWNpZmllZCBzY3JlZW4tY29vcmRpbmF0ZXMgYWdhaW5zdCB0aGUgc3BlY2lmaWVkXG4gICAqIGxpc3Qgb2Ygb2JqZWN0cy5cbiAgICpcbiAgICogTm90ZSBmb3IgdHlwZXNjcmlwdCB1c2VyczogdGhlIHJldHVybmVkIEludGVyc2VjdGlvbiBvYmplY3RzIGNhbiBvbmx5IGJlXG4gICAqIHByb3Blcmx5IHR5cGVkIGZvciBub24tcmVjdXJzaXZlIGxvb2t1cHMgKHRoaXMgaXMgaGFuZGxlZCBieSB0aGUgaW50ZXJuYWxcbiAgICogc2lnbmF0dXJlIGJlbG93KS5cbiAgICpcbiAgICogQHBhcmFtIHAgbm9ybWFsaXplZCBzY3JlZW5zcGFjZSBjb29yZGluYXRlcyBvZiB0aGVcbiAgICogICBtb3VzZS1jdXJzb3IuIHgveSBhcmUgaW4gcmFuZ2UgWy0xLCAxXSwgeSBpcyBwb2ludGluZyB1cC5cbiAgICogQHBhcmFtIG9iamVjdHMgbGlzdCBvZiBvYmplY3RzIHRvIHRlc3RcbiAgICogQHBhcmFtIG9wdGlvbnMgcmF5Y2FzdGluZyBvcHRpb25zLlxuICAgKi9cbiAgcHVibGljIHJheWNhc3QoXG4gICAgcDogVmVjdG9yMixcbiAgICBvYmplY3RzOiBPYmplY3QzRFtdLFxuICAgIG9wdGlvbnM/OiBSYXljYXN0T3B0aW9ucyAmIHsgcmVjdXJzaXZlOiB0cnVlIH1cbiAgKTogSW50ZXJzZWN0aW9uW107XG5cbiAgLy8gYWRkaXRpb25hbCBzaWduYXR1cmUgdG8gZW5hYmxlIHR5cGluZ3MgaW4gcmV0dXJuZWQgb2JqZWN0cyB3aGVuIHBvc3NpYmxlXG4gIHB1YmxpYyByYXljYXN0PFQgZXh0ZW5kcyBPYmplY3QzRD4oXG4gICAgcDogVmVjdG9yMixcbiAgICBvYmplY3RzOiBUW10sXG4gICAgb3B0aW9ucz86XG4gICAgICB8IE9taXQ8UmF5Y2FzdE9wdGlvbnMsIFwicmVjdXJzaXZlXCI+XG4gICAgICB8IChSYXljYXN0T3B0aW9ucyAmIHsgcmVjdXJzaXZlOiBmYWxzZSB9KVxuICApOiBJbnRlcnNlY3Rpb248VD5bXTtcblxuICAvLyBpbXBsZW1ldGF0aW9uXG4gIHB1YmxpYyByYXljYXN0KFxuICAgIHA6IFZlY3RvcjIsXG4gICAgb3B0aW9uc09yT2JqZWN0cz86IE9iamVjdDNEW10gfCBSYXljYXN0T3B0aW9ucyxcbiAgICBvcHRpb25zOiBSYXljYXN0T3B0aW9ucyA9IHt9XG4gICk6IEludGVyc2VjdGlvbltdIHtcbiAgICBsZXQgb2JqZWN0czogT2JqZWN0M0RbXTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zT3JPYmplY3RzKSkge1xuICAgICAgb2JqZWN0cyA9IG9wdGlvbnNPck9iamVjdHMgfHwgbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqZWN0cyA9IFt0aGlzLnNjZW5lXTtcbiAgICAgIG9wdGlvbnMgPSB7IC4uLm9wdGlvbnNPck9iamVjdHMsIHJlY3Vyc2l2ZTogdHJ1ZSB9O1xuICAgIH1cblxuICAgIGNvbnN0IHtcbiAgICAgIHVwZGF0ZU1hdHJpeCA9IHRydWUsXG4gICAgICByZWN1cnNpdmUgPSBmYWxzZSxcbiAgICAgIHJheWNhc3RlclBhcmFtZXRlcnMsXG4gICAgfSA9IG9wdGlvbnM7XG5cbiAgICAvLyB3aGVuIGByYXljYXN0KClgIGlzIGNhbGxlZCBmcm9tIHdpdGhpbiB0aGUgYG9uQmVmb3JlUmVuZGVyKClgIGNhbGxiYWNrLFxuICAgIC8vIHRoZSBtdnAtbWF0cml4IGZvciB0aGlzIGZyYW1lIGhhcyBhbHJlYWR5IGJlZW4gY29tcHV0ZWQgYW5kIHN0b3JlZCBpblxuICAgIC8vIGB0aGlzLmNhbWVyYS5wcm9qZWN0aW9uTWF0cml4YC5cbiAgICAvLyBUaGUgbXZwLW1hdHJpeCB0cmFuc2Zvcm1zIHdvcmxkLXNwYWNlIG1ldGVycyB0byBjbGlwLXNwYWNlXG4gICAgLy8gY29vcmRpbmF0ZXMuIFRoZSBpbnZlcnNlIG1hdHJpeCBjcmVhdGVkIGhlcmUgZG9lcyB0aGUgZXhhY3Qgb3Bwb3NpdGVcbiAgICAvLyBhbmQgY29udmVydHMgY2xpcC1zcGFjZSBjb29yZGluYXRlcyB0byB3b3JsZC1zcGFjZS5cbiAgICBpZiAodXBkYXRlTWF0cml4KSB7XG4gICAgICB0aGlzLnByb2plY3Rpb25NYXRyaXhJbnZlcnNlLmNvcHkodGhpcy5jYW1lcmEucHJvamVjdGlvbk1hdHJpeCkuaW52ZXJ0KCk7XG4gICAgfVxuXG4gICAgLy8gY3JlYXRlIHR3byBwb2ludHMgKHdpdGggZGlmZmVyZW50IGRlcHRoKSBmcm9tIHRoZSBtb3VzZS1wb3NpdGlvbiBhbmRcbiAgICAvLyBjb252ZXJ0IHRoZW0gaW50byB3b3JsZC1zcGFjZSBjb29yZGluYXRlcyB0byBzZXQgdXAgdGhlIHJheS5cbiAgICB0aGlzLnJheWNhc3Rlci5yYXkub3JpZ2luXG4gICAgICAuc2V0KHAueCwgcC55LCAwKVxuICAgICAgLmFwcGx5TWF0cml4NCh0aGlzLnByb2plY3Rpb25NYXRyaXhJbnZlcnNlKTtcblxuICAgIHRoaXMucmF5Y2FzdGVyLnJheS5kaXJlY3Rpb25cbiAgICAgIC5zZXQocC54LCBwLnksIDAuNSlcbiAgICAgIC5hcHBseU1hdHJpeDQodGhpcy5wcm9qZWN0aW9uTWF0cml4SW52ZXJzZSlcbiAgICAgIC5zdWIodGhpcy5yYXljYXN0ZXIucmF5Lm9yaWdpbilcbiAgICAgIC5ub3JtYWxpemUoKTtcblxuICAgIC8vIGJhY2sgdXAgdGhlIHJheWNhc3RlciBwYXJhbWV0ZXJzXG4gICAgY29uc3Qgb2xkUmF5Y2FzdGVyUGFyYW1zID0gdGhpcy5yYXljYXN0ZXIucGFyYW1zO1xuICAgIGlmIChyYXljYXN0ZXJQYXJhbWV0ZXJzKSB7XG4gICAgICB0aGlzLnJheWNhc3Rlci5wYXJhbXMgPSByYXljYXN0ZXJQYXJhbWV0ZXJzO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdHMgPSB0aGlzLnJheWNhc3Rlci5pbnRlcnNlY3RPYmplY3RzKG9iamVjdHMsIHJlY3Vyc2l2ZSk7XG5cbiAgICAvLyByZXNldCByYXljYXN0ZXIgcGFyYW1zIHRvIHdoYXRldmVyIHRoZXkgd2VyZSBiZWZvcmVcbiAgICB0aGlzLnJheWNhc3Rlci5wYXJhbXMgPSBvbGRSYXljYXN0ZXJQYXJhbXM7XG5cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfVxuXG4gIC8qKlxuICAgKiBPdmVyd3JpdGUgdGhpcyBtZXRob2QgdG8gaGFuZGxlIGFueSBHTCBzdGF0ZSB1cGRhdGVzIG91dHNpZGUgdGhlXG4gICAqIHJlbmRlciBhbmltYXRpb24gZnJhbWUuXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqL1xuICBwdWJsaWMgb25TdGF0ZVVwZGF0ZShvcHRpb25zOiBnb29nbGUubWFwcy5XZWJHTFN0YXRlT3B0aW9ucyk6IHZvaWQge31cblxuICAvKipcbiAgICogT3ZlcndyaXRlIHRoaXMgbWV0aG9kIHRvIGZldGNoIG9yIGNyZWF0ZSBpbnRlcm1lZGlhdGUgZGF0YSBzdHJ1Y3R1cmVzXG4gICAqIGJlZm9yZSB0aGUgb3ZlcmxheSBpcyBkcmF3biB0aGF0IGRvbuKAmXQgcmVxdWlyZSBpbW1lZGlhdGUgYWNjZXNzIHRvIHRoZVxuICAgKiBXZWJHTCByZW5kZXJpbmcgY29udGV4dC5cbiAgICovXG4gIHB1YmxpYyBvbkFkZCgpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIE92ZXJ3cml0ZSB0aGlzIG1ldGhvZCB0byB1cGRhdGUgeW91ciBzY2VuZSBqdXN0IGJlZm9yZSBhIG5ldyBmcmFtZSBpc1xuICAgKiBkcmF3bi5cbiAgICovXG4gIHB1YmxpYyBvbkJlZm9yZURyYXcoKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbiB0aGUgb3ZlcmxheSBpcyByZW1vdmVkIGZyb20gdGhlIG1hcCB3aXRoXG4gICAqIGBvdmVybGF5LnNldE1hcChudWxsKWAsIGFuZCBpcyB3aGVyZSB5b3UgY2FuIHJlbW92ZSBhbGwgaW50ZXJtZWRpYXRlXG4gICAqIG9iamVjdHMgY3JlYXRlZCBpbiBvbkFkZC5cbiAgICovXG4gIHB1YmxpYyBvblJlbW92ZSgpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXJzIHRoZSBtYXAgdG8gdXBkYXRlIEdMIHN0YXRlLlxuICAgKi9cbiAgcHVibGljIHJlcXVlc3RTdGF0ZVVwZGF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLm92ZXJsYXkucmVxdWVzdFN0YXRlVXBkYXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlcnMgdGhlIG1hcCB0byByZWRyYXcgYSBmcmFtZS5cbiAgICovXG4gIHB1YmxpYyByZXF1ZXN0UmVkcmF3KCk6IHZvaWQge1xuICAgIHRoaXMub3ZlcmxheS5yZXF1ZXN0UmVkcmF3KCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbWFwIHRoZSBvdmVybGF5IGlzIGFkZGVkIHRvLlxuICAgKi9cbiAgcHVibGljIGdldE1hcCgpOiBnb29nbGUubWFwcy5NYXAge1xuICAgIHJldHVybiB0aGlzLm92ZXJsYXkuZ2V0TWFwKCk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyB0aGUgb3ZlcmxheSB0byB0aGUgbWFwLlxuICAgKiBAcGFyYW0gbWFwIFRoZSBtYXAgdG8gYWNjZXNzIHRoZSBkaXYsIG1vZGVsIGFuZCB2aWV3IHN0YXRlLlxuICAgKi9cbiAgcHVibGljIHNldE1hcChtYXA6IGdvb2dsZS5tYXBzLk1hcCk6IHZvaWQge1xuICAgIHRoaXMub3ZlcmxheS5zZXRNYXAobWFwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIHRoZSBnaXZlbiBsaXN0ZW5lciBmdW5jdGlvbiB0byB0aGUgZ2l2ZW4gZXZlbnQgbmFtZS4gUmV0dXJucyBhblxuICAgKiBpZGVudGlmaWVyIGZvciB0aGlzIGxpc3RlbmVyIHRoYXQgY2FuIGJlIHVzZWQgd2l0aFxuICAgKiA8Y29kZT5nb29nbGUubWFwcy5ldmVudC5yZW1vdmVMaXN0ZW5lcjwvY29kZT4uXG4gICAqL1xuICBwdWJsaWMgYWRkTGlzdGVuZXIoXG4gICAgZXZlbnROYW1lOiBzdHJpbmcsXG4gICAgaGFuZGxlcjogKC4uLmFyZ3M6IHVua25vd25bXSkgPT4gdm9pZFxuICApOiBnb29nbGUubWFwcy5NYXBzRXZlbnRMaXN0ZW5lciB7XG4gICAgcmV0dXJuIHRoaXMub3ZlcmxheS5hZGRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBvbmNlIHRoZSByZW5kZXJpbmcgY29udGV4dCBpcyBhdmFpbGFibGUuIFVzZSBpdCB0b1xuICAgKiBpbml0aWFsaXplIG9yIGJpbmQgYW55IFdlYkdMIHN0YXRlIHN1Y2ggYXMgc2hhZGVycyBvciBidWZmZXIgb2JqZWN0cy5cbiAgICogQHBhcmFtIG9wdGlvbnMgdGhhdCBhbGxvdyBkZXZlbG9wZXJzIHRvIHJlc3RvcmUgdGhlIEdMIGNvbnRleHQuXG4gICAqL1xuICBwdWJsaWMgb25Db250ZXh0UmVzdG9yZWQoeyBnbCB9OiBnb29nbGUubWFwcy5XZWJHTFN0YXRlT3B0aW9ucykge1xuICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgV2ViR0xSZW5kZXJlcih7XG4gICAgICBjYW52YXM6IGdsLmNhbnZhcyxcbiAgICAgIGNvbnRleHQ6IGdsLFxuICAgICAgLi4uZ2wuZ2V0Q29udGV4dEF0dHJpYnV0ZXMoKSxcbiAgICB9KTtcbiAgICB0aGlzLnJlbmRlcmVyLmF1dG9DbGVhciA9IGZhbHNlO1xuICAgIHRoaXMucmVuZGVyZXIuYXV0b0NsZWFyRGVwdGggPSBmYWxzZTtcbiAgICB0aGlzLnJlbmRlcmVyLnNoYWRvd01hcC5lbmFibGVkID0gdHJ1ZTtcbiAgICB0aGlzLnJlbmRlcmVyLnNoYWRvd01hcC50eXBlID0gUENGU29mdFNoYWRvd01hcDtcblxuICAgIC8vIExpbmVhckVuY29kaW5nIGlzIGRlZmF1bHQgZm9yIGhpc3RvcmljYWwgcmVhc29uc1xuICAgIC8vIGh0dHBzOi8vZGlzY291cnNlLnRocmVlanMub3JnL3QvbGluZWFyZW5jb2RpbmctdnMtc3JnYmVuY29kaW5nLzIzMjQzXG4gICAgdGhpcy5yZW5kZXJlci5vdXRwdXRFbmNvZGluZyA9IHNSR0JFbmNvZGluZztcblxuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gZ2wuY2FudmFzO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0Vmlld3BvcnQoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW4gdGhlIHJlbmRlcmluZyBjb250ZXh0IGlzIGxvc3QgZm9yIGFueSByZWFzb24sXG4gICAqIGFuZCBpcyB3aGVyZSB5b3Ugc2hvdWxkIGNsZWFuIHVwIGFueSBwcmUtZXhpc3RpbmcgR0wgc3RhdGUsIHNpbmNlIGl0IGlzXG4gICAqIG5vIGxvbmdlciBuZWVkZWQuXG4gICAqL1xuICBwdWJsaWMgb25Db250ZXh0TG9zdCgpIHtcbiAgICBpZiAoIXRoaXMucmVuZGVyZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlcmVyLmRpc3Bvc2UoKTtcbiAgICB0aGlzLnJlbmRlcmVyID0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gZHJhdyBXZWJHTCBjb250ZW50IGRpcmVjdGx5IG9uIHRoZSBtYXAuIE5vdGVcbiAgICogdGhhdCBpZiB0aGUgb3ZlcmxheSBuZWVkcyBhIG5ldyBmcmFtZSBkcmF3biB0aGVuIGNhbGwge0BsaW5rXG4gICAqIFRocmVlSlNPdmVybGF5Vmlldy5yZXF1ZXN0UmVkcmF3fS5cbiAgICogQHBhcmFtIG9wdGlvbnMgdGhhdCBhbGxvdyBkZXZlbG9wZXJzIHRvIHJlbmRlciBjb250ZW50IHRvIGFuIGFzc29jaWF0ZWRcbiAgICogICAgIEdvb2dsZSBiYXNlbWFwLlxuICAgKi9cbiAgcHVibGljIG9uRHJhdyh7IGdsLCB0cmFuc2Zvcm1lciB9OiBnb29nbGUubWFwcy5XZWJHTERyYXdPcHRpb25zKTogdm9pZCB7XG4gICAgdGhpcy5jYW1lcmEucHJvamVjdGlvbk1hdHJpeC5mcm9tQXJyYXkoXG4gICAgICB0cmFuc2Zvcm1lci5mcm9tTGF0TG5nQWx0aXR1ZGUodGhpcy5hbmNob3IsIHRoaXMucm90YXRpb25BcnJheSlcbiAgICApO1xuXG4gICAgZ2wuZGlzYWJsZShnbC5TQ0lTU09SX1RFU1QpO1xuXG4gICAgdGhpcy5vbkJlZm9yZURyYXcoKTtcblxuICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhKTtcbiAgICB0aGlzLnJlbmRlcmVyLnJlc2V0U3RhdGUoKTtcblxuICAgIGlmICh0aGlzLmFuaW1hdGlvbk1vZGUgPT09IFwiYWx3YXlzXCIpIHRoaXMucmVxdWVzdFJlZHJhdygpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgY29vcmRpbmF0ZXMgZnJvbSBXR1M4NCBMYXRpdHVkZSBMb25naXR1ZGUgdG8gd29ybGQtc3BhY2VcbiAgICogY29vcmRpbmF0ZXMgd2hpbGUgdGFraW5nIHRoZSBvcmlnaW4gYW5kIG9yaWVudGF0aW9uIGludG8gYWNjb3VudC5cbiAgICovXG4gIHB1YmxpYyBsYXRMbmdBbHRpdHVkZVRvVmVjdG9yMyhcbiAgICBwb3NpdGlvbjogTGF0TG5nVHlwZXMsXG4gICAgdGFyZ2V0ID0gbmV3IFZlY3RvcjMoKVxuICApIHtcbiAgICBsYXRMbmdUb1ZlY3RvcjNSZWxhdGl2ZShcbiAgICAgIHRvTGF0TG5nQWx0aXR1ZGVMaXRlcmFsKHBvc2l0aW9uKSxcbiAgICAgIHRoaXMuYW5jaG9yLFxuICAgICAgdGFyZ2V0XG4gICAgKTtcblxuICAgIHRhcmdldC5hcHBseVF1YXRlcm5pb24odGhpcy5yb3RhdGlvbkludmVyc2UpO1xuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuXG4gIC8vIE1WQ09iamVjdCBpbnRlcmZhY2UgZm9yd2FyZGVkIHRvIHRoZSBvdmVybGF5XG5cbiAgLyoqXG4gICAqIEJpbmRzIGEgVmlldyB0byBhIE1vZGVsLlxuICAgKi9cbiAgcHVibGljIGJpbmRUbyhcbiAgICBrZXk6IHN0cmluZyxcbiAgICB0YXJnZXQ6IGdvb2dsZS5tYXBzLk1WQ09iamVjdCxcbiAgICB0YXJnZXRLZXk/OiBzdHJpbmcsXG4gICAgbm9Ob3RpZnk/OiBib29sZWFuXG4gICk6IHZvaWQge1xuICAgIHRoaXMub3ZlcmxheS5iaW5kVG8oa2V5LCB0YXJnZXQsIHRhcmdldEtleSwgbm9Ob3RpZnkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgYSB2YWx1ZS5cbiAgICovXG4gIHB1YmxpYyBnZXQoa2V5OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5vdmVybGF5LmdldChrZXkpO1xuICB9XG5cbiAgLyoqXG4gICAqIE5vdGlmeSBhbGwgb2JzZXJ2ZXJzIG9mIGEgY2hhbmdlIG9uIHRoaXMgcHJvcGVydHkuIFRoaXMgbm90aWZpZXMgYm90aFxuICAgKiBvYmplY3RzIHRoYXQgYXJlIGJvdW5kIHRvIHRoZSBvYmplY3QncyBwcm9wZXJ0eSBhcyB3ZWxsIGFzIHRoZSBvYmplY3RcbiAgICogdGhhdCBpdCBpcyBib3VuZCB0by5cbiAgICovXG4gIHB1YmxpYyBub3RpZnkoa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLm92ZXJsYXkubm90aWZ5KGtleSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBhIHZhbHVlLlxuICAgKi9cbiAgcHVibGljIHNldChrZXk6IHN0cmluZywgdmFsdWU6IHVua25vd24pOiB2b2lkIHtcbiAgICB0aGlzLm92ZXJsYXkuc2V0KGtleSwgdmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgYSBjb2xsZWN0aW9uIG9mIGtleS12YWx1ZSBwYWlycy5cbiAgICovXG4gIHB1YmxpYyBzZXRWYWx1ZXModmFsdWVzPzogb2JqZWN0KTogdm9pZCB7XG4gICAgdGhpcy5vdmVybGF5LnNldFZhbHVlcyh2YWx1ZXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYSBiaW5kaW5nLiBVbmJpbmRpbmcgd2lsbCBzZXQgdGhlIHVuYm91bmQgcHJvcGVydHkgdG8gdGhlIGN1cnJlbnRcbiAgICogdmFsdWUuIFRoZSBvYmplY3Qgd2lsbCBub3QgYmUgbm90aWZpZWQsIGFzIHRoZSB2YWx1ZSBoYXMgbm90IGNoYW5nZWQuXG4gICAqL1xuICBwdWJsaWMgdW5iaW5kKGtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5vdmVybGF5LnVuYmluZChrZXkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYWxsIGJpbmRpbmdzLlxuICAgKi9cbiAgcHVibGljIHVuYmluZEFsbCgpOiB2b2lkIHtcbiAgICB0aGlzLm92ZXJsYXkudW5iaW5kQWxsKCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBsaWdodHMgKGRpcmVjdGlvbmFsIGFuZCBoZW1pc3BoZXJlIGxpZ2h0KSB0byBpbGx1bWluYXRlIHRoZSBtb2RlbFxuICAgKiAocm91Z2hseSBhcHByb3hpbWF0ZXMgdGhlIGxpZ2h0aW5nIG9mIGJ1aWxkaW5ncyBpbiBtYXBzKVxuICAgKi9cbiAgcHJpdmF0ZSBpbml0U2NlbmVMaWdodHMoKSB7XG4gICAgY29uc3QgaGVtaUxpZ2h0ID0gbmV3IEhlbWlzcGhlcmVMaWdodCgweGZmZmZmZiwgMHg0NDQ0NDQsIDEpO1xuICAgIGhlbWlMaWdodC5wb3NpdGlvbi5zZXQoMCwgLTAuMiwgMSkubm9ybWFsaXplKCk7XG5cbiAgICBjb25zdCBkaXJMaWdodCA9IG5ldyBEaXJlY3Rpb25hbExpZ2h0KDB4ZmZmZmZmKTtcbiAgICBkaXJMaWdodC5wb3NpdGlvbi5zZXQoMCwgMTAsIDEwMCk7XG5cbiAgICB0aGlzLnNjZW5lLmFkZChoZW1pTGlnaHQsIGRpckxpZ2h0KTtcbiAgfVxufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAyMSBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBMT0FERVJfT1BUSU9OUyB9IGZyb20gXCIuL2NvbmZpZ1wiO1xuaW1wb3J0IHsgVGhyZWVKU092ZXJsYXlWaWV3IH0gZnJvbSBcIi4uL3NyY1wiO1xuXG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tIFwiQGdvb2dsZW1hcHMvanMtYXBpLWxvYWRlclwiO1xuaW1wb3J0IHtcbiAgQXhlc0hlbHBlcixcbiAgQ3lsaW5kZXJHZW9tZXRyeSxcbiAgR3JpZEhlbHBlcixcbiAgTWF0aFV0aWxzLFxuICBNZXNoLFxuICBNZXNoTWF0Y2FwTWF0ZXJpYWwsXG4gIFZlY3RvcjIsXG59IGZyb20gXCJ0aHJlZVwiO1xuXG4vLyB0aGUgY29ybmVycyBvZiB0aGUgZmllbGQgaW4gdGhlIExldmnigJlzIFN0YWRpdW0gaW4gU2FudGEgQ2xhcmFcbmNvbnN0IGNvb3JkaW5hdGVzID0gW1xuICB7IGxuZzogLTEyMS45NzAyOTA0LCBsYXQ6IDM3LjQwMzQzNjIgfSxcbiAgeyBsbmc6IC0xMjEuOTY5ODAxOCwgbGF0OiAzNy40MDI3MDk1IH0sXG4gIHsgbG5nOiAtMTIxLjk2OTMxMDksIGxhdDogMzcuNDAyOTE4IH0sXG4gIHsgbG5nOiAtMTIxLjk2OTgwNCwgbGF0OiAzNy40MDM2NDY1IH0sXG5dO1xuY29uc3QgY2VudGVyID0geyBsbmc6IC0xMjEuOTY5ODAzMiwgbGF0OiAzNy40MDMxNzc3LCBhbHRpdHVkZTogMCB9O1xuXG5jb25zdCBERUZBVUxUX0NPTE9SID0gMHhmZmZmZmY7XG5jb25zdCBISUdITElHSFRfQ09MT1IgPSAweGZmMDAwMDtcblxuY29uc3QgbWFwT3B0aW9ucyA9IHtcbiAgY2VudGVyLFxuICBtYXBJZDogXCI3MDU3ODg2ZTIxMjI2ZmY3XCIsXG4gIHpvb206IDE4LFxuICB0aWx0OiA2Ny41LFxuICBkaXNhYmxlRGVmYXVsdFVJOiB0cnVlLFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgZ2VzdHVyZUhhbmRsaW5nOiBcImdyZWVkeVwiLFxufTtcblxubmV3IExvYWRlcihMT0FERVJfT1BUSU9OUykubG9hZCgpLnRoZW4oKCkgPT4ge1xuICAvLyBjcmVhdGUgdGhlIG1hcCBhbmQgb3ZlcmxheVxuICBjb25zdCBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFwXCIpLCBtYXBPcHRpb25zKTtcbiAgY29uc3Qgb3ZlcmxheSA9IG5ldyBUaHJlZUpTT3ZlcmxheVZpZXcoeyBtYXAsIGFuY2hvcjogY2VudGVyLCB1cEF4aXM6IFwiWVwiIH0pO1xuXG4gIGNvbnN0IG1hcERpdiA9IG1hcC5nZXREaXYoKTtcbiAgY29uc3QgbW91c2VQb3NpdGlvbiA9IG5ldyBWZWN0b3IyKCk7XG5cbiAgbWFwLmFkZExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIChldjogZ29vZ2xlLm1hcHMuTWFwTW91c2VFdmVudCkgPT4ge1xuICAgIGNvbnN0IGRvbUV2ZW50ID0gZXYuZG9tRXZlbnQgYXMgTW91c2VFdmVudDtcbiAgICBjb25zdCB7IGxlZnQsIHRvcCwgd2lkdGgsIGhlaWdodCB9ID0gbWFwRGl2LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgY29uc3QgeCA9IGRvbUV2ZW50LmNsaWVudFggLSBsZWZ0O1xuICAgIGNvbnN0IHkgPSBkb21FdmVudC5jbGllbnRZIC0gdG9wO1xuXG4gICAgbW91c2VQb3NpdGlvbi54ID0gMiAqICh4IC8gd2lkdGgpIC0gMTtcbiAgICBtb3VzZVBvc2l0aW9uLnkgPSAxIC0gMiAqICh5IC8gaGVpZ2h0KTtcblxuICAgIC8vIHNpbmNlIHRoZSBhY3R1YWwgcmF5Y2FzdGluZyBpcyBwZXJmb3JtZWQgd2hlbiB0aGUgbmV4dCBmcmFtZSBpc1xuICAgIC8vIHJlbmRlcmVkLCB3ZSBoYXZlIHRvIG1ha2Ugc3VyZSB0aGF0IGl0IHdpbGwgYmUgY2FsbGVkIGZvciB0aGUgbmV4dCBmcmFtZS5cbiAgICBvdmVybGF5LnJlcXVlc3RSZWRyYXcoKTtcbiAgfSk7XG5cbiAgLy8gZ3JpZC0gYW5kIGF4ZXMgaGVscGVycyB0byBoZWxwIHdpdGggdGhlIG9yaWVudGF0aW9uXG4gIGNvbnN0IGdyaWQgPSBuZXcgR3JpZEhlbHBlcigxKTtcblxuICBncmlkLnJvdGF0aW9uLnkgPSBNYXRoVXRpbHMuZGVnVG9SYWQoMjguMSk7XG4gIGdyaWQuc2NhbGUuc2V0KDQ4LjgsIDAsIDkxLjQ0KTtcbiAgb3ZlcmxheS5zY2VuZS5hZGQoZ3JpZCk7XG4gIG92ZXJsYXkuc2NlbmUuYWRkKG5ldyBBeGVzSGVscGVyKDIwKSk7XG5cbiAgY29uc3QgbWVzaGVzID0gY29vcmRpbmF0ZXMubWFwKChwKSA9PiB7XG4gICAgY29uc3QgbWVzaCA9IG5ldyBNZXNoKFxuICAgICAgbmV3IEN5bGluZGVyR2VvbWV0cnkoMiwgMSwgMjAsIDI0LCAxKSxcbiAgICAgIG5ldyBNZXNoTWF0Y2FwTWF0ZXJpYWwoKVxuICAgICk7XG4gICAgbWVzaC5nZW9tZXRyeS50cmFuc2xhdGUoMCwgbWVzaC5nZW9tZXRyeS5wYXJhbWV0ZXJzLmhlaWdodCAvIDIsIDApO1xuICAgIG92ZXJsYXkubGF0TG5nQWx0aXR1ZGVUb1ZlY3RvcjMocCwgbWVzaC5wb3NpdGlvbik7XG5cbiAgICBvdmVybGF5LnNjZW5lLmFkZChtZXNoKTtcblxuICAgIHJldHVybiBtZXNoO1xuICB9KTtcblxuICBsZXQgaGlnaGxpZ2h0ZWRPYmplY3Q6ICh0eXBlb2YgbWVzaGVzKVtudW1iZXJdIHwgbnVsbCA9IG51bGw7XG5cbiAgb3ZlcmxheS5vbkJlZm9yZURyYXcgPSAoKSA9PiB7XG4gICAgY29uc3QgaW50ZXJzZWN0aW9ucyA9IG92ZXJsYXkucmF5Y2FzdChtb3VzZVBvc2l0aW9uLCBtZXNoZXMsIHtcbiAgICAgIHJlY3Vyc2l2ZTogZmFsc2UsXG4gICAgfSk7XG5cbiAgICBpZiAoaGlnaGxpZ2h0ZWRPYmplY3QpIHtcbiAgICAgIC8vIHdoZW4gdGhlcmUncyBhIHByZXZpb3VzbHkgaGlnaGxpZ2h0ZWQgb2JqZWN0LCByZXNldCB0aGUgaGlnaGxpZ2h0aW5nXG4gICAgICBoaWdobGlnaHRlZE9iamVjdC5tYXRlcmlhbC5jb2xvci5zZXRIZXgoREVGQVVMVF9DT0xPUik7XG4gICAgfVxuXG4gICAgaWYgKGludGVyc2VjdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAvLyByZXNldCBkZWZhdWx0IGN1cnNvciB3aGVuIG5vIG9iamVjdCBpcyB1bmRlciB0aGUgY3Vyc29yXG4gICAgICBtYXAuc2V0T3B0aW9ucyh7IGRyYWdnYWJsZUN1cnNvcjogbnVsbCB9KTtcbiAgICAgIGhpZ2hsaWdodGVkT2JqZWN0ID0gbnVsbDtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBjaGFuZ2UgdGhlIGNvbG9yIG9mIHRoZSBvYmplY3QgYW5kIHVwZGF0ZSB0aGUgbWFwLWN1cnNvciB0byBpbmRpY2F0ZVxuICAgIC8vIHRoZSBvYmplY3QgaXMgY2xpY2thYmxlLlxuICAgIGhpZ2hsaWdodGVkT2JqZWN0ID0gaW50ZXJzZWN0aW9uc1swXS5vYmplY3Q7XG4gICAgaGlnaGxpZ2h0ZWRPYmplY3QubWF0ZXJpYWwuY29sb3Iuc2V0SGV4KEhJR0hMSUdIVF9DT0xPUik7XG4gICAgbWFwLnNldE9wdGlvbnMoeyBkcmFnZ2FibGVDdXJzb3I6IFwicG9pbnRlclwiIH0pO1xuICB9O1xufSk7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFjRztBQU1JLE1BQU0sY0FBYyxHQUFrQjtBQUMzQyxJQUFBLE1BQU0sRUFBRSx5Q0FBeUM7QUFDakQsSUFBQSxPQUFPLEVBQUUsTUFBTTtBQUNmLElBQUEsU0FBUyxFQUFFLEVBQUU7Q0FDZDs7QUN4QkQ7Ozs7Ozs7Ozs7Ozs7O0FBY0c7QUFVSDtBQUNBLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQztBQUM5QyxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxHQUFHLFNBQVMsQ0FBQztBQUVsQyxNQUFNLFlBQVksR0FBRyxTQUFTLENBQUM7QUFHdEM7Ozs7QUFJRztBQUNHLFNBQVUsdUJBQXVCLENBQ3JDLEtBQWtCLEVBQUE7SUFFbEIsSUFDRSxNQUFNLENBQUMsTUFBTTtBQUNiLFFBQUEsTUFBTSxDQUFDLElBQUk7QUFDWCxTQUFDLEtBQUssWUFBWSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU07QUFDbEMsWUFBQSxLQUFLLFlBQVksTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsRUFDOUM7UUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDO0FBQzNDLEtBQUE7SUFFRCxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxHQUFJLEtBQW1DLEVBQUUsQ0FBQztBQUNsRSxDQUFDO0FBRUQ7OztBQUdHO0FBQ0csU0FBVSx1QkFBdUIsQ0FDckMsS0FBd0MsRUFDeEMsU0FBNEMsRUFDNUMsTUFBTSxHQUFHLElB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
