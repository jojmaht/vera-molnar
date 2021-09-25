import "./App.css";

const getRandomPoints = (viewboxSize) => {
  const coords = [
    [0, 0],
    [1, 0],
    [2, 0],
    [3, 0],
    [0, 1],
    [1, 1],
    [2, 1],
    [3, 1],
    [0, 2],
    [1, 2],
    [2, 2],
    [3, 2],
    [0, 3],
    [1, 3],
    [2, 3],
    [3, 3],
  ];
  const spacing = viewboxSize / 3;
  const pointsLength = Math.max(9, Math.floor(Math.random() * 16));
  let points = [];
  for (let i = 1; i <= pointsLength; i++) {
    points.push(
      coords[Math.floor(Math.random() * coords.length)].map(
        (point) => point * spacing
      )
    );
  }
  let length = 0;
  for (var i = 0; i < points.length - 1; i++) {
    const distanceX = Math.abs(points[i][0] - points[i + 1][0]);
    const distanceY = Math.abs(points[i][1] - points[i + 1][1]);
    length += Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
  }

  return { points, length };
};

function App() {
  return (
    <div>
      <div
        style={{
          width: "100%",
          maxWidth: "100vh",
          height: 0,
          paddingBottom: "100%",
          position: "absolute",
          top: 0,
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            maxHeight: "100vh",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {Array.from({ length: 100 }).map((item, index) => {
            const { points, length } = getRandomPoints(80);
            return (
              <div
                style={{
                  width: "10%",
                  height: "10%",
                  padding: "8px",
                  textAlign: "center",
                  flexGrow: 0,
                }}
              >
                <svg
                  viewBox="0 0 80 80"
                  style={{
                    overflow: "visible",
                  }}
                >
                  <polyline
                    points={points.map(([x, y]) => x + "," + y).join(" ")}
                    fill="none"
                    stroke="#cf3b3d"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeDasharray={length}
                    strokeDashoffset={length}
                    style={{ animationDelay: `${index / 100}s` }}
                  />
                </svg>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
