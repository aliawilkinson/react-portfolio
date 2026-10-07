import css from './LampToggle.module.scss'

// The lamp is the theme switch: lit means light mode, off means dark mode.
const LampToggle = ({ isOn, onToggle }) => (
  <button
    type="button"
    className={`${css.lamp} ${isOn ? css.on : css.off}`}
    onClick={onToggle}
    aria-pressed={!isOn}
    aria-label={isOn ? 'Turn the lamp off (switch to dark mode)' : 'Turn the lamp on (switch to light mode)'}
    title={isOn ? 'Lights off' : 'Lights on'}
  >
    <span className={css.glow} aria-hidden="true" />
    <svg className={css.art} viewBox="0 0 40 44" aria-hidden="true">
      <path className={css.shadeShape} d="M13 5h14l6 15H7z" />
      <ellipse className={css.bulb} cx="20" cy="21" rx="5" ry="3" />
      <path className={css.stand} d="M20 22v14" />
      <path className={css.base} d="M12 39c0-2 3.5-3.5 8-3.5s8 1.5 8 3.5z" />
      <g className={css.chain}>
        <path d="M27 20v8" />
        <circle cx="27" cy="29.5" r="1.6" />
      </g>
    </svg>
  </button>
)

export default LampToggle
