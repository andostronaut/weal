const React = require('react')

const { ProgressBar } = require('react-loader-spinner')

const Loader = () => {
  const loader = (
    <div className='loader-container'>
      <ProgressBar
        height='80'
        width='80'
        ariaLabel='progress-bar-loading'
        wrapperStyle={{}}
        wrapperClass='progress-bar-wrapper'
        borderColor='#FFF'
        barColor='#FFF'
      />
    </div>
  )

  return loader
}

module.exports = Loader
