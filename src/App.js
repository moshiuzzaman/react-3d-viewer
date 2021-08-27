import { Accordion, Col, Container, Row } from 'react-bootstrap';
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "drei"
import { Physics } from "use-cannon";
import './App.css';


function Box() {
	//const [ref, api] = useBox(() => ({ mass: 1, position: [0, 2, 0] }));
	return (
	  <mesh
	  >
		<boxBufferGeometry attach="geometry" />
		<meshLambertMaterial attach="material" color="hotpink" />
	  </mesh>
	);
  }

  
  var zoom = 50,
  	  autoRotate = true,
  	  rotSpeed = 5,
	  // rotBottom = 32, //Descending from 32 to 1 for bottom view
	 //  rotTop = 1, //Ascending from 1 to 32 for top view
  	  zoomEnable = true;

function App() {
	return (
		<div>
			<Container>
				<h1 align="center" className="mb-3">
					3d Viewer
				</h1>
				<Row>
					<Col md="7">
						<Canvas
							id="renderCanvas"
							width="650px"
							height="740"
							className="bg-info"
							camera={{ position: [0, 0, 4], fov: zoom }}>
							
							<ambientLight intensity={0.5} />
							<spotLight intensity={0.5} position={[25, 25, 25]} angle={0.1}  />
							<Physics>
							<OrbitControls 
								minPolarAngle={Math.PI/32 } 
								maxPolarAngle={Math.PI } 
								enableZoom={zoomEnable} 
								autoRotate={autoRotate} 
								autoRotateSpeed = {rotSpeed}
							/>
							<Box />
							</Physics>
						</Canvas>
						
					</Col>
					<Col md="5">
						<div className="config-section-header">
							<h6>Configuration</h6>
						</div>
						<Accordion>
							<Accordion.Item eventKey="0">
								<Accordion.Header className="according-btn">
									Rotation
								</Accordion.Header>
								<Accordion.Body>
									<Row className="mb-2">
										<Col md="8">Autorotation</Col>
										<Col md="4" className="d-flex justify-content-end">
											<div className="form-check form-switch">
												<input
													onchange="rotation()"
													className="form-check-input"
													type="checkbox"
													id="autoRotationControl"
													checked
												/>
											</div>
										</Col>
									</Row>
									<div className="rotation_speed">
										<p className="mb-1">Autorotation speed</p>
										<input
											type="range"
											className="form-range"
											value="1"
											onChange="rotationSpeed()"
											min="-2.5"
											max="2.5"
											step="0.5"
											id="rotation_speed"
										/>
									</div>
									<div className="rotation_top_limit">
										<p className="mb-1">Rotation top limit</p>
										<input
											type="range"
											className="form-range"
											value="1.5"
											onChange="rotationTopLimit()"
											min="-1"
											max="4"
											step="0.5"
											id="rotation_top_limit"
										/>
									</div>
									<div className="rotation_bottom_limit">
										<p className="mb-1">Rotation bottom limit</p>
										<input
											type="range"
											className="form-range"
											value="2.5"
											onChange="rotationBottomLimit()"
											min="0"
											max="5"
											step="0.5"
											id="rotation_bottom_limit"
										/>
									</div>
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="1">
								<Accordion.Header className="according-btn">
									Zoom
								</Accordion.Header>
								<Accordion.Body>
									<Row className="mb-2">
										<Col md="8">Zoom Enable</Col>
										<Col md="4" className="d-flex justify-content-end">
											<div className="form-check form-switch">
												<input
													onchange="rotation()"
													className="form-check-input"
													type="checkbox"
													id="ZoomControl"
													checked
												/>
											</div>
										</Col>
									</Row>
									<div className="zoom_in_limit">
										<p className="mb-1">Zoom in limit</p>
										<input
											type="range"
											className="form-range"
											value="-1"
											onChange="zoomInLimit()"
											min="-1"
											max="-0.1"
											step="0.15"
											id="zoom_in_limit"
										/>
									</div>
									<div className="zoom_out_limit">
										<p className="mb-1">Zoom out limit</p>
										<input
											type="range"
											className="form-range"
											value="0.5"
											onChange="zoomOutLimit()"
											min="0.5"
											max="1.2"
											step="0.1"
											id="zoom_out_limit"
										/>
									</div>
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="2">
								<Accordion.Header className="according-btn">
									Shadow
								</Accordion.Header>
								<Accordion.Body>
									<Row className="mb-2">
										<Col md="8">Shadow Enable</Col>
										<Col md="4" className="d-flex justify-content-end">
											<div className="form-check form-switch">
												<input
													onchange="rotation()"
													className="form-check-input"
													type="checkbox"
													id="shadowControl"
													checked
												/>
											</div>
										</Col>
									</Row>
									<div className="shadow_blur">
										<p className="mb-1">Shadow blur</p>
										<input
											type="range"
											className="form-range"
											value="2"
											min="0"
											max="5"
											step="0.5"
											id="shadow_blur"
										/>
									</div>
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="3">
								<Accordion.Header className="according-btn">
									Background
								</Accordion.Header>
								<Accordion.Body>
									<div className="accordion-body">
										<p className="mb-1">Background Color</p>
										<div className="background_colors">
											<div
												className="bc1 bg-info"
												onclick="backGround('0.529', '0.808', '0.922')"
											></div>
											<div
												className="bc2 bg-danger"
												onclick="backGround('0.5', '0', '0')"
											></div>
											<div
												className="bc3 bg-secondary"
												onclick="backGround('0.502', '0.502', '0.502')"
											></div>
											<div
												className="bc4 bg-primary"
												onclick="backGround('0.255', '0.412', '0.882')"
											></div>
											<div
												className="bc4 bg-success"
												onclick="backGround('0.18', '0.545', '0.341')"
											></div>
											<div
												className="bc4 bg-warning"
												onclick="backGround('1', '1', '0.5')"
											></div>
										</div>
									</div>
								</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default App;
