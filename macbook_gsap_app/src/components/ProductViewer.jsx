import useMacbookStore from "../store";
import clsx from "clsx";
import { Canvas } from "@react-three/fiber";
//자주 쓰는 기능을 미리 만들어놓은 “부품 모음집”
import { OrbitControls } from "@react-three/drei";
import { MacbookModel14 } from "./models/Macbook-14";
import StudioLights from "./StudioLights";

export default function ProductViewer() {
  const { color, scale, setColor, setScale } = useMacbookStore();

  return (
    <section id='product-viewer'>
      <h2>Take a closer look.</h2>

      <div className='controls'>
        <p className='info'>
          MacbookPro {scale} in {color}
        </p>
        <div className='flex-center gap-5 mt-5'>
          <div className='color-control'>
            <div
              onClick={() => setColor("#adb5db")}
              className={clsx(
                "bg-neutral-300",
                color === "#adb5db" && "active"
              )}
            ></div>
            <div
              onClick={() => setColor("#2e2c2e")}
              className={clsx(
                "bg-neutral-900",
                color === "#2e2c2e" && "active"
              )}
            ></div>
          </div>

          <div className='size-control'>
            <div
              onClick={() => setScale(0.06)}
              className={clsx(
                scale === 0.06
                  ? "bg-white text-black"
                  : "bg-transparent text-white"
              )}
            >
              <p>14"</p>
            </div>
            <div
              onClick={() => setScale(0.08)}
              className={clsx(
                scale === 0.08
                  ? "bg-white text-black"
                  : "bg-transparent text-white"
              )}
            >
              <p>16"</p>
            </div>
          </div>
        </div>
      </div>

      <Canvas
        id='canvas'
        camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }}
      >
        <StudioLights />
        <MacbookModel14 scale={0.06} position={[-1, 0, 0]} />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </section>
  );
}
