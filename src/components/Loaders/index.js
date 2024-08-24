import { ColorRing } from 'react-loader-spinner'

const RingLoader = () => {
  return (
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="color-ring-loading"
      wrapperStyle={{}}
      wrapperclassName="color-ring-wrapper"
      colors={['#053C4B', '#053C4B', '#053C4B', '#053C4B', '#053C4B']}
    />
  )
}

export {
  RingLoader,
}