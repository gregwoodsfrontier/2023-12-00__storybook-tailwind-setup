import Icon from '../Icon/Icon'

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

      <img
        src="https://picsum.photos/seed/indicator/300/300"
        alt="avatar-with-indicator"
        className="h-18 w-18 rounded-full border-avatar border-white object-cover"
      />

      <div className="center h-18 w-18 rounded-full border-avatar border-white border-opacity-50 bg-spanishGreen fill-white">
        <Icon id="eyeClosed" />
      </div>

      <div className="relative">
        <img
          src="https://picsum.photos/seed/santa/300/300"
          alt="avatar-with-santa-hat"
          className="h-18 w-18 rounded-full border-avatar border-white object-cover"
        />
        <img
          src="/santa-hat/santa-hat.png"
          alt="santa-hat"
          className="absolute left-0 top-0"
        />
      </div>
    </div>
  )
}

export default Avatar
