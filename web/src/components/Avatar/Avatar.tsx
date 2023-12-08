import Icon from '../Icon/Icon'
import Indicator from '../Indicator/Indicator'

const Avatar = () => {
  return (
    <div>
      <img
        src="https://picsum.photos/seed/8938308/300/300"
        alt="avatar-01"
        className="h-18 w-18 rounded-full border-avatar border-white object-cover"
      />

      <div className="center h-18 w-18 rounded-full border-avatar border-white bg-spanishGreen text-2xl font-bold uppercase text-white">
        A
      </div>

      <div className="center h-18 w-18 rounded-full border-avatar border-vistaBlue bg-spanishGreen text-white">
        <Icon id="eyeClosed" size={32} />
      </div>

      <div className="relative inline-block">
        <img
          src="https://picsum.photos/seed/santa/300/300"
          alt="avatar-with-santa-hat"
          className="h-18 w-18 rounded-full border-avatar border-white object-cover"
        />
        <img
          src="/images/santa-hat.png"
          alt="santa-hat"
          className="absolute -right-[15px] -top-[19px]"
        />
      </div>

      <div className="relative inline-block">
        <img
          src="https://picsum.photos/seed/santa/300/300"
          alt="avatar-with-santa-hat"
          className="h-18 w-18 rounded-full border-avatar border-white object-cover"
        />
        <div className="absolute bottom-0 right-0">
          <Indicator status="success" />
        </div>
      </div>
    </div>
  )
}

export default Avatar
