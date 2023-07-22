import Image from 'next/image'

const FeatureItem = ({ id, heading, description, icon }: Feature) => {
	return (
		<article className='flex flex-col items-center gap-12'>
			<Image src={icon} alt='' className='' />
			<div className='flex flex-col items-center gap-4 text-center'>
				<h4 className='text-lg font-bold '>{heading}</h4>
				<p className='text-[15px]/[25px] text-black/60 '>
					{description}
				</p>
			</div>
		</article>
	)
}
export default FeatureItem
