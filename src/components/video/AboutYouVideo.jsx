import { useVideoConfig, useCurrentFrame, Img } from 'remotion'

export const AboutYouVideo = ({ currentUser, popIn }) => {
	const { displayName, icon } = currentUser
	const { fps, durationInFrames, width, height } = useVideoConfig()
	const frame = useCurrentFrame()
	const textFade = frame / (durationInFrames / 2)

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
					opacity: textFade,
				}}
				>

			<Img src={icon} style={{borderRadius: '50%',}}/>	

			<p>Hello {displayName}!</p>
			<p>This is your video, it is {durationInFrames/fps} seconds long!</p>
			</div>
		</div>
	)
};