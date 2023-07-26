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
		<section className='flex flex-col items-center gap-10 px-7 py-16 md:px-10 md:py-28'>
			<Switch.Group
				as='div'
				className='group flex items-center justify-between md:justify-normal'>
				<Switch.Label as='span' className='mr-3'>
					<span className=''>Monthly</span>
				</Switch.Label>
				<Switch
					checked={frequency.value === 'monthly'}
					onChange={handleToggle}
					className={`${
						frequency.value === 'monthly' ? 'bg-blue-600' : 'bg-gray-200'
					} relative inline-flex h-6 w-11 items-center rounded-full`}>
					<span className='sr-only'>Enable notifications</span>
					<span
						className={`${
							frequency.value === 'monthly' ? 'translate-x-6' : 'translate-x-1'
						} inline-block h-4 w-4 transform rounded-full bg-white transition`}
					/>
				</Switch>
			</Switch.Group>

			<RadioGroup
				value={plan}
				onChange={setPlan}
				className='grid grid-cols-1 gap-6 lg:grid-cols-3'>
				<RadioGroup.Label className='sr-only'>Pricing Plans</RadioGroup.Label>
				{pricingTiers.map((tier) => (
					<RadioGroup.Option key={tier.plan} value={tier}>
						{({ checked }) => (
							<div
								className={clsx(
									'flex flex-col gap-10 px-9 py-14',
									checked
										? 'gradient-border bg-black text-white'
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
