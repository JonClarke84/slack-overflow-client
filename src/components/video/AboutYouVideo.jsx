import { useVideoConfig, useCurrentFrame, Img, spring, interpolate } from 'remotion'

export const AboutYouVideo = ({ currentUser }) => {
	const { displayName, icon } = currentUser
	const { fps, durationInFrames, width, height } = useVideoConfig()
	const frame = useCurrentFrame()

	const scale = spring({
		frame: frame - 15,
		fps,
		from: 0,
		to: 1,
		config: {
			stiffness: 70,
		}
	})

	const textSpring = spring({
		frame: frame - 30,
		fps,
		from: 75,
		to: 0,
		config: {
			stiffness: 100,
			overshootClamping: true,
			damping: 50,
		}
	})

	return (
		<div
			style={{
				display: 'flex',
				width: width,
				height: height,
				alignItems: 'center',
				justifyContent: 'center',
				fontSize: '1em',
				background: '#f0f0f0',
			}}
		>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					color: '#232323',
				}}
				>

			<Img src={icon} style={{ borderRadius: '50%',
															 borderWidth: 5,
															 borderColour: 'black',
															 transform: `scale(${scale})`,
															 }}/>	
			
			<div style={{
				transform: `translateY(${textSpring}px)`,
			}}>
			<p>Hello {displayName}!</p>
			<p>This is your video, it is {durationInFrames/fps} seconds long!</p>
			</div>
			</div>
		</div>
	)
};