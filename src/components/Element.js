const Element = ({ element, onDoubleClick }) => {
  const [tooltipPosition, setTooltipPosition] = useState({ vertical: 'top', horizontal: 'center' });
  const elementRef = useRef(null);

  useEffect(() => {
    const handlePosition = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const newPosition = {
          vertical: rect.top < window.innerHeight / 2 ? 'top' : 'bottom',
          horizontal: rect.left < window.innerWidth / 2 ? 'left' : 'right',
        };
        setTooltipPosition(newPosition);
      }
    };

    handlePosition();
    window.addEventListener('resize', handlePosition);
    return () => window.removeEventListener('resize', handlePosition);
  }, []);

  const formatElectronConfiguration = (config) => {
    return config.replace(/([spdf])(\d+)/g, '$1<sup>$2</sup>');
  };

  return (
    <div
      id={element.number}
      className={`element ${element.category}`}
      style={{
        gridRow: element.y,
        gridColumn: element.x,
      }}
      ref={elementRef}
      onDoubleClick={() => onDoubleClick(element)}
    >
      <div className="atomic-number">{element.number}</div>
      <div className="symbol">{element.symbol}</div>
      <div className="atomic-mass">{element.atomic_mass}</div>
      <div className={`tooltip ${tooltipPosition.vertical} ${tooltipPosition.horizontal} ${element.category}`}>
        {formatElectronConfiguration(element.electron_configuration)}
      </div>
    </div>
  );
};

export default Element;