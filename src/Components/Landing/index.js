import React from "react";
import Particles from "react-particles-js";
import ParticleConfig from "./config/particle-config";
import Banner from "./Banner";

export default function Landing() {
    return (
        <div id="landing">
            <Particles params={ParticleConfig} height="100vh"/>
            <Banner />
        </div>
    );
}
