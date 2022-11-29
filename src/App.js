import ara from './ara2013_tray27_rgb.png';
import ComputerVision from './ComputerVision';

const response = {
  "image": ara,
  "plants": [{
      "plant_id": 0,
      "detection_bbox": [72, 314, 72, 661, 417, 661, 417, 314],
      "plant_detail": {
        "days_old": 5,
        "growth_rate_daily": 0.02,
        "problem_detection": "no_problem",
      }
    },
    {
      "plant_id": 1,
      "detection_bbox": [684, 396, 684, 564, 845, 564, 845, 396],
      "plant_detail": {
        "days_old": 5,
        "growth_rate_daily": 0.02,
        "problem_detection": "no_problem",
      }
    },
    {
      "plant_id": 2,
      "detection_bbox": [1127, 303, 1127, 633, 1418, 633, 1418, 303],
      "plant_detail": {
        "days_old": 5,
        "growth_rate_daily": 0.02,
        "problem_detection": "no_problem",
      }
    },
    {
      "plant_id": 3,
      "detection_bbox": [1784, 448, 1784, 514, 1858, 514, 1858, 448],
      "plant_detail": {
        "days_old": 5,
        "growth_rate_daily": 0.02,
        "problem_detection": "no_problem",
      }
    },
    {
      "plant_id": 4,
      "detection_bbox": [2183, 382, 2183, 711, 2523, 711, 2523, 382],
      "plant_detail": {
        "days_old": 5,
        "growth_rate_daily": 0.02,
        "problem_detection": "no_problem",
      }
    },
    {
      "plant_id": 5,
      "detection_bbox": [2789, 426, 2789, 592, 2972, 592, 2972, 426],
      "plant_detail": {
        "days_old": 5,
        "growth_rate_daily": 0.02,
        "problem_detection": "no_problem",
      }
    },
    {
      "plant_id": 6,
      "detection_bbox": [98, 929, 98, 1176, 442, 1176, 442, 929],
      "plant_detail": {
        "days_old": 5,
        "growth_rate_daily": 0.02,
        "problem_detection": "no_problem",
      }
    },
    {
      "plant_id": 7,
      "days_old": 5,
      "detection_bbox": [583, 812, 583, 1168, 889, 1168, 889, 812],
      "plant_detail": {
        "days_old": 5,
        "growth_rate_daily": 0.02,
        "problem_detection": "no_problem",
      }
    },
    {
      "plant_id": 8,
      "detection_bbox": [1264, 980, 1264, 1036, 1327, 1036, 1327, 980],
      "plant_detail": {
        "days_old": 5,
        "growth_rate_daily": 0.02,
        "problem_detection": "no_problem",
      }
    },
    {
      "plant_id": 9,
      "detection_bbox": [1686, 955, 1686, 1141, 1903, 1141, 1903, 955],
      "plant_detail": {
        "days_old": 5,
        "growth_rate_daily": 0.02,
        "problem_detection": "no_problem",
      }
    },
    {
      "plant_id": 10,
      "detection_bbox": [2129, 871, 2129, 1207, 2498, 1207, 2498, 871],
      "plant_detail": {
        "days_old": 5,
        "growth_rate_daily": 0.02,
        "problem_detection": "no_problem",
      }
    },
    {
      "plant_id": 11,
      "detection_bbox": [2777, 1060, 2777, 1113, 2843, 1113, 2843, 1060],
      "plant_detail": {
        "days_old": 5,
        "growth_rate_daily": 0.02,
        "problem_detection": "no_problem",
      }
    }

  ]
};

function App() {
  return (
    <div className="App">
      <ComputerVision  data={response}/>
    </div>
  );
}

export default App;
