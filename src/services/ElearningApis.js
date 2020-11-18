
import axios from "axios";



export function getProfessorExams() {
  return new Promise((resolve, reject) => {
    axios
      .get("http://localhost:9080/elearning-project-0.0.1-SNAPSHOT/rest/Elearnig/profsByExam")
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}

export function getProfessorEtudiants() {
  return new Promise((resolve, reject) => {
    axios
      .get("http://localhost:9080/elearning-project-0.0.1-SNAPSHOT/rest/Elearnig/profsByEtudiants")
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}
export function getProfessorCours() {
  return new Promise((resolve, reject) => {
    axios
      .get("http://localhost:9080/elearning-project-0.0.1-SNAPSHOT/rest/Elearnig/profsByCours")
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}
export function getModulesByMeets() {
  return new Promise((resolve, reject) => {
    axios
      .get("http://localhost:9080/elearning-project-0.0.1-SNAPSHOT/rest/Elearnig/modulesByMeets")
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}
export function getModulesByCours() {
  return new Promise((resolve, reject) => {
    axios
      .get("http://localhost:9080/elearning-project-0.0.1-SNAPSHOT/rest/Elearnig/modulesByCours")
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}
export function getModulesByDocument() {
  return new Promise((resolve, reject) => {
    axios
      .get("http://localhost:9080/elearning-project-0.0.1-SNAPSHOT/rest/Elearnig/modulesByDocument")
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}

export function getAllProfessor() {
  return new Promise((resolve, reject) => {
    axios
      .get("http://localhost:9080/elearning-project-0.0.1-SNAPSHOT/rest/Elearnig/allProfs")
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}

export function getAllEtudiant() {
  return new Promise((resolve, reject) => {
    axios
      .get("http://localhost:9080/elearning-project-0.0.1-SNAPSHOT/rest/Elearnig/Etudiant")
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}
export function getAllCours() {
  return new Promise((resolve, reject) => {
    axios
      .get("http://localhost:9080/elearning-project-0.0.1-SNAPSHOT/rest/Elearnig/allCours")
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}
export function getAllModule() {
  return new Promise((resolve, reject) => {
    axios
      .get("http://localhost:9080/elearning-project-0.0.1-SNAPSHOT/rest/Elearnig/allmodules")
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}