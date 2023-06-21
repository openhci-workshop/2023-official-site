'use client';
import { Canvas } from '@react-three/fiber';
import { Html, PresentationControls, Box } from '@react-three/drei';

const Insight = () => {
	return (
		<div className="w-screen h-screen">
			<Canvas>
				<PresentationControls rotation={[0.5, 0.8, 0]}>
					<Box args={[2, 2, 2]} material-color="white">
						<Html
							position={[0, 0, 1]}
							transform
							distanceFactor={1}
							rotation-x={0}
							rotation-y={0}
							rotation-z={0}
						>
							<iframe className="mx-auto" width={800} height={800} src="/insight/index.html" />
						</Html>
					</Box>
				</PresentationControls>
			</Canvas>
		</div>
	);
};

export default Insight;
