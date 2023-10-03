import PropTypes from 'prop-types';
 function Avatar({image}) {
  return (
    <div className="relative w-12 h-12 bg-gray-100 rounded-full">
        <img
          className="absolute w-12 h-12 text-gray-400"
          src={image ? image : "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"}
          alt=""
        />
        <span className="bottom-0 left-8 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
    </div>
  )
}

export default Avatar;

Avatar.propTypes = {
  image: PropTypes.string
};