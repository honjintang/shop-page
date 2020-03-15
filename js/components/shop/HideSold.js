import React from 'react'
import { connect } from 'react-redux'
import ReusableButton from '~/components/general/reusableButton'
import { toggleSoldItems } from '~/actions'
import { isShowingSoldItems } from '~/reducers/display'

export const HideSold = props => {
    const { toggleSoldItems, showSoldItems } = props

    return  (
        <ReusableButton 
            id='hide-show'
            label='Hide Sold Items'
            onClick={() => toggleSoldItems(!showSoldItems)}
            active={!showSoldItems}
        />
    )
}

const mapStateToProps = state => ({
    showSoldItems: isShowingSoldItems(state),
})

const mapDispatchToProps = {
    toggleSoldItems,
}

export default connect(mapStateToProps, mapDispatchToProps)(HideSold)