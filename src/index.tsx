import React, { createElement, useEffect, useRef } from 'react'

import type { ReactElement, FC } from 'react'

type TInfiniteScrollProps = {
	enabled?: boolean,
	threshold?: number,
	observeIndex?: number,
	itemParentType?: string,
	onLoadMore?: Function,
	items: ReactElement []
}

export const InfiniteScroll: FC<TInfiniteScrollProps> = (props) => {
	const {
		enabled,
		threshold,
		observeIndex,
		itemParentType,
		onLoadMore,
		items
	} = props

	const isObserveIndexValid = observeIndex !== undefined && observeIndex !== null && observeIndex >= 0 && observeIndex < items.length
	const internalObserveIndex = isObserveIndexValid ? observeIndex : items.length - 1

	const observeRef = useRef<null | HTMLElement>(null)

	useEffect(() => {
		const observer = new IntersectionObserver((e) => {
			if (e[0].isIntersecting) {
				if (typeof onLoadMore === 'function' && enabled) onLoadMore()
			}
		}, {
			threshold: threshold ?? 1
		})

		if (observeRef.current) {
			observer.observe(observeRef.current)
		}

		return () => {
			observer.disconnect()
		}

	}, [enabled, threshold, onLoadMore, internalObserveIndex])

	return (
		<>
			{
				items.map((item, index) => {
					return (
						createElement(
							itemParentType || 'li',
							{
								key: item.key,
								ref: index === internalObserveIndex ? observeRef : null
							},
							item
						)
					)
				})
			}
		</>
	)
}
