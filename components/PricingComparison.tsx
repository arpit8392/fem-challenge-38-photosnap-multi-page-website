import { pricingPlanFeatures } from '@/data'
import Tick from '@/public/assets/pricing/desktop/check.svg'
import Image from 'next/image'

// TODO: Match Table Layout with Design for Mobile Layout

const tableHeaders = ['The Features', 'Basic', 'Pro', 'Business']

const PricingComparison = () => {
	return (
		<section className='px-7 py-16 md:px-10 md:py-28 lg:px-[350px]'>
			<div className='flex flex-col items-center gap-16'>
				<h3 className='text-center text-[40px]/[48px] font-bold uppercase tracking-[4.167px]'>
					Compare
				</h3>
				<table className='mx-auto min-w-full divide-y divide-black border-b border-lightGrey'>
					<thead>
						<tr>
							{tableHeaders.map((item, index) => (
								<th
									key={index}
									scope='col'
									className='px-2 py-6 text-left text-xs font-bold uppercase tracking-[2px]'>
									{item}
								</th>
							))}
						</tr>
					</thead>
					<tbody className='divide-y divide-lightGrey'>
						{pricingPlanFeatures.map((feature) => (
							<tr key={feature.feature}>
								<td className='py-6 text-xs font-bold uppercase tracking-[2px]'>
									{feature.feature}
								</td>
								{Object.entries(feature.tiers).map((tier, index) => (
									<td key={index}>
										{tier[1] && (
											<div className='flex items-center justify-center md:justify-normal'>
												<Image
													src={Tick}
													alt=''
													className='w-auto object-contain md:px-4'
												/>
											</div>
										)}
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</section>
	)
}
export default PricingComparison
