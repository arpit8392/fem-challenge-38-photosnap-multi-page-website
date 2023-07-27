'use client'

import { frequencies, pricingTiers } from '@/data'
import { RadioGroup, Switch } from '@headlessui/react'
import { useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

const PlanCTA = () => {
	const [frequency, setFrequency] = useState(frequencies[0])
	const [plan, setPlan] = useState(pricingTiers[1])

	const handleToggle = () => {
		if (frequency.value === 'monthly') {
			setFrequency(frequencies[1])
		} else {
			setFrequency(frequencies[0])
		}
	}

	return (
		<section className='flex flex-col items-center gap-10 px-7 py-16 md:px-10 md:py-28 lg:px-40 lg:pt-32'>
			<Switch.Group as='div' className='group flex items-center gap-8'>
				<Switch.Label as='span'>
					<span
						className={clsx(
							'text-[18px]/[25px] font-bold',
							frequency.value === 'monthly' ? 'text-black' : 'text-black/50'
						)}>
						Monthly
					</span>
				</Switch.Label>
				<Switch
					checked={frequency.value === 'monthly'}
					onChange={handleToggle}
					className={`${
						frequency.value === 'monthly' ? 'bg-lightGrey' : 'bg-black'
					} relative inline-flex h-8 w-16 items-center rounded-full p-1`}>
					<span className='sr-only'>Enable notifications</span>
					<span
						className={`${
							frequency.value === 'monthly'
								? 'translate-x-1 bg-black'
								: 'translate-x-8 bg-white'
						} inline-block h-6 w-6 rounded-full duration-300`}
					/>
				</Switch>
				<Switch.Label as='span'>
					<span
						className={clsx(
							'text-[18px]/[25px] font-bold',
							frequency.value === 'annually' ? 'text-black' : 'text-black/50'
						)}>
						Yearly
					</span>
				</Switch.Label>
			</Switch.Group>

			<RadioGroup
				value={plan}
				onChange={setPlan}
				className='grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8'>
				<RadioGroup.Label className='sr-only'>Pricing Plans</RadioGroup.Label>
				{pricingTiers.map((tier) => (
					<RadioGroup.Option key={tier.plan} value={tier}>
						{({ checked }) => (
							<div
								className={clsx(
									'flex flex-col gap-10 px-9 py-14',
									checked
										? 'relative scale-105 bg-black text-white duration-200 before:absolute before:inset-0 before:h-[6px] before:bg-accent-gradient md:before:h-full md:before:w-[6px] lg:before:h-[6px] lg:before:w-full'
										: ' bg-[#F5F5F5] text-black'
								)}>
								<div className='flex flex-col gap-[18px] text-center'>
									<h2 className='text-2xl font-bold'>{tier.plan}</h2>
									<p
										className={clsx(
											'font-[15px]/[25px]',
											checked ? 'text-white/60' : 'text-black/60'
										)}>
										{tier.summary}
									</p>
								</div>
								<div
									className={clsx(
										'flex flex-col items-center text-[15px]/[25px]',
										checked ? 'text-white/60' : 'text-black/60'
									)}>
									<span
										className={clsx(
											'text-[40px]/[48px] font-bold tracking-[4.167px]',
											checked ? 'text-white' : 'text-black'
										)}>{`$${tier.pricing[frequency.value].toFixed(2)}`}</span>
									{frequency.priceSuffix}
								</div>
								<Link
									href={'#'}
									className={clsx(
										'py-3 text-center text-xs font-bold uppercase tracking-[2px] hover:bg-lightGrey hover:text-black',
										checked ? 'bg-white text-black' : 'bg-black text-white'
									)}>
									Pick Plan
								</Link>
							</div>
						)}
					</RadioGroup.Option>
				))}
			</RadioGroup>
		</section>
	)
}
export default PlanCTA
