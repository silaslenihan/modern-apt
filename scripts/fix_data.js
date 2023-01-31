import descriptions from "../mock_data/apt_descriptions.js";
import assignments from "../mock_data/assignments.js";
import * as fs from "fs";

function fixData() {
  for (const i in assignments) {
    const assignment = assignments[i];
    for (const j in assignment.apts) {
      const apt = assignment.apts[j];
      for (const k in descriptions) {
        if (descriptions[k].name == apt.name) {
          assignments[i].apts[j].id = k;
        }
      }
    }
  }

  fs.writeFile(
    "mock_data/assignments.js",
    `export default ${JSON.stringify(assignments)}`,
    (err) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log("File updated successfully");
    }
  );
}

fixData();
