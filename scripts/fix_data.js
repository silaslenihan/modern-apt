import assignments from "../mock_data/assignments.js";
import apt_descriptions from "../mock_data/apt_descriptions.js";

function main() {
  for (assignment in assignments) {
    console.log(assignment);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
