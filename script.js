/**
 * Cada sección define un rango de filas y un esquema de columnas por fila:
 *   groups: [ ["A","B"], ["D","E","F"], ["H","I"] ]  // 2–3–2 (3 grupos con pasillos entre medio)
 *   className: "first" | "premium" | "economy"
 */
const seatLayout = {
  1: [
    {
      className: "first",
      rows: [1, 4],
      groups: [["A", "B"], [], [], [], [], [], ["F", "G"]]
    },
    {
      className: "premium", 
      rows: [8, 15],
      groups: [["A", "B"], [], ["C"], [], [], [], ["E", "F", "G"]]
    },
    {
      className: "economy",
      rows: [19, 34],
      groups: [["A", "B"], [], ["C"], [], [], [], ["E", "F", "G"]]
    }
  ],
  2: [
    {
      className: "first",
      rows: [1, 5],
      groups: [["A"], [], [], [], ["E"], [], [], [], ["I"]]
    },
    {
      className: "premium",
      rows: [9, 14],
      groups: [["A", "B"], [], [], ["D"], [], ["E", "F"], [], ["H"], [], ["I"]]
    },
    {
      className: "economy",
      rows: [18, 31],
      groups: [["A", "B"], [], [], ["D"], [], ["E", "F"], [], ["H"], [], ["I"]]
    }
  ]
};

// Información de los aviones
const airplaneInfo = {
  1: {
    name: "AirNova-660",
    totalSeats: 160,
  },
  2: {
    name: "AirMax-720neo",
    totalSeats: 155,
  }
};

// Vuelos -> avión
const flightsAirplanes = { 1:1, 4:1, 2:2, 3:2 };

// Configuración de IDs de asientos por avión
const airplaneConfig = {
  1: {
    startId: 1,
    endId: 160,
    letters: ["A", "B", "C", "D", "E", "F", "G"]
  },
  2: {
    startId: 161,
    endId: 315,
    letters: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
  }
};

// Mapeo directo de IDs de asientos para avión 1
const airplane1SeatMapping = {
  // Columna A
  1: "A1", 2: "A2", 3: "A3", 4: "A4", 5: "A8", 6: "A9", 7: "A10", 8: "A11", 9: "A12", 10: "A13",
  11: "A14", 12: "A15", 13: "A19", 14: "A20", 15: "A21", 16: "A22", 17: "A23", 18: "A24", 19: "A25",
  20: "A26", 21: "A27", 22: "A28", 23: "A29", 24: "A30", 25: "A31", 26: "A32", 27: "A33", 28: "A34",
  // Columna B
  29: "B1", 30: "B2", 31: "B3", 32: "B4", 33: "B8", 34: "B9", 35: "B10", 36: "B11", 37: "B12", 38: "B13",
  39: "B14", 40: "B15", 41: "B19", 42: "B20", 43: "B21", 44: "B22", 45: "B23", 46: "B24", 47: "B25",
  48: "B26", 49: "B27", 50: "B28", 51: "B29", 52: "B30", 53: "B31", 54: "B32", 55: "B33", 56: "B34",
  // Columna C
  57: "C8", 58: "C9", 59: "C10", 60: "C11", 61: "C12", 62: "C13", 63: "C14", 64: "C15", 65: "C19",
  66: "C20", 67: "C21", 68: "C22", 69: "C23", 70: "C24", 71: "C25", 72: "C26", 73: "C27", 74: "C28",
  75: "C29", 76: "C30", 77: "C31", 78: "C32", 79: "C33", 80: "C34",
  // Columna E
  81: "E8", 82: "E9", 83: "E10", 84: "E11", 85: "E12", 86: "E13", 87: "E14", 88: "E15", 89: "E19",
  90: "E20", 91: "E21", 92: "E22", 93: "E23", 94: "E24", 95: "E25", 96: "E26", 97: "E27", 98: "E28",
  99: "E29", 100: "E30", 101: "E31", 102: "E32", 103: "E33", 104: "E34",
  // Columna F
  105: "F1", 106: "F2", 107: "F3", 108: "F4", 109: "F8", 110: "F9", 111: "F10", 112: "F11", 113: "F12", 114: "F13",
  115: "F14", 116: "F15", 117: "F19", 118: "F20", 119: "F21", 120: "F22", 121: "F23", 122: "F24", 123: "F25",
  124: "F26", 125: "F27", 126: "F28", 127: "F29", 128: "F30", 129: "F31", 130: "F32", 131: "F33", 132: "F34",
  // Columna G
  133: "G1", 134: "G2", 135: "G3", 136: "G4", 137: "G8", 138: "G9", 139: "G10", 140: "G11", 141: "G12", 142: "G13",
  143: "G14", 144: "G15", 145: "G19", 146: "G20", 147: "G21", 148: "G22", 149: "G23", 150: "G24", 151: "G25",
  152: "G26", 153: "G27", 154: "G28", 155: "G29", 156: "G30", 157: "G31", 158: "G32", 159: "G33", 160: "G34"
};

// Mapeo directo de IDs de asientos para avión 2
const airplane2SeatMapping = {
  // Columna A
  161: "A1", 162: "A2", 163: "A3", 164: "A4", 165: "A5", 166: "A9", 167: "A10", 168: "A11", 169: "A12", 170: "A13",
  171: "A14", 172: "A18", 173: "A19", 174: "A20", 175: "A21", 176: "A22", 177: "A23", 178: "A24", 179: "A25",
  180: "A26", 181: "A27", 182: "A28", 183: "A29", 184: "A30", 185: "A31",
  // Columna B
  186: "B9", 187: "B10", 188: "B11", 189: "B12", 190: "B13", 191: "B14", 192: "B18", 193: "B19", 194: "B20",
  195: "B21", 196: "B22", 197: "B23", 198: "B24", 199: "B25", 200: "B26", 201: "B27", 202: "B28", 203: "B29",
  204: "B30", 205: "B31",
  // Columna D
  206: "D9", 207: "D10", 208: "D11", 209: "D12", 210: "D13", 211: "D14", 212: "D18", 213: "D19", 214: "D20",
  215: "D21", 216: "D22", 217: "D23", 218: "D24", 219: "D25", 220: "D26", 221: "D27", 222: "D28", 223: "D29",
  224: "D30", 225: "D31",
  // Columna E
  226: "E1", 227: "E2", 228: "E3", 229: "E4", 230: "E5", 231: "E9", 232: "E10", 233: "E11", 234: "E12", 235: "E13",
  236: "E14", 237: "E18", 238: "E19", 239: "E20", 240: "E21", 241: "E22", 242: "E23", 243: "E24", 244: "E25",
  245: "E26", 246: "E27", 247: "E28", 248: "E29", 249: "E30", 250: "E31",
  // Columna F
  251: "F9", 252: "F10", 253: "F11", 254: "F12", 255: "F13", 256: "F14", 257: "F18", 258: "F19", 259: "F20",
  260: "F21", 261: "F22", 262: "F23", 263: "F24", 264: "F25", 265: "F26", 266: "F27", 267: "F28", 268: "F29",
  269: "F30", 270: "F31",
  // Columna H
  271: "H9", 272: "H10", 273: "H11", 274: "H12", 275: "H13", 276: "H14", 277: "H18", 278: "H19", 279: "H20",
  280: "H21", 281: "H22", 282: "H23", 283: "H24", 284: "H25", 285: "H26", 286: "H27", 287: "H28", 288: "H29",
  289: "H30", 290: "H31",
  // Columna I
  291: "I1", 292: "I2", 293: "I3", 294: "I4", 295: "I5", 296: "I9", 297: "I10", 298: "I11", 299: "I12", 300: "I13",
  301: "I14", 302: "I18", 303: "I19", 304: "I20", 305: "I21", 306: "I22", 307: "I23", 308: "I24", 309: "I25",
  310: "I26", 311: "I27", 312: "I28", 313: "I29", 314: "I30", 315: "I31"
};

// Asientos pre-ocupados por vuelo
const preOccupiedSeatsByFlight = {
  1: [1, 2, 3, 4, 8, 13, 19, 26, 29, 30, 31, 32, 33, 47, 59, 73, 78, 85, 95, 101,
      105, 106, 107, 108, 110, 117, 119, 122, 129, 131, 133, 134, 135, 136, 149, 156],
  2: [161, 162, 163, 164, 165, 184, 185, 186, 206, 216, 217, 226, 227, 228, 229, 230,
      233, 266, 267, 286, 287, 291, 292, 293, 294, 295, 299],
  3: [161, 162, 163, 164, 165, 166, 188, 189, 204, 209, 210, 224, 226, 227, 228, 229,
      230, 254, 255, 256, 265, 266, 273, 274, 291, 292, 293, 294, 295, 312, 313],
  4: [1, 2, 3, 4, 11, 20, 29, 30, 31, 32, 33, 34, 60, 61, 70, 71, 105, 106, 107, 108,
      117, 118, 122, 123, 133, 134, 135, 136, 140, 150, 151, 152]
};

function calculateSeatNumericId(airplaneId, row, letter) {
  const alphaId = `${letter}${row}`;

  if (airplaneId === 1) {
    // Buscar en el mapeo directo del avión 1
    for (const [numericId, seatCode] of Object.entries(airplane1SeatMapping)) {
      if (seatCode === alphaId) {
        return parseInt(numericId);
      }
    }
    return null;
  } else if (airplaneId === 2) {
    // Buscar en el mapeo directo del avión 2
    for (const [numericId, seatCode] of Object.entries(airplane2SeatMapping)) {
      if (seatCode === alphaId) {
        return parseInt(numericId);
      }
    }
    return null;
  }

  // Para otros aviones, usar el cálculo anterior si fuera necesario
  const config = airplaneConfig[airplaneId];
  if (!config) return null;

  const sections = seatLayout[airplaneId];
  let seatCount = 0;

  for (const section of sections) {
    for (let r = section.rows[0]; r <= section.rows[1]; r++) {
      for (const l of config.letters) {
        const letterExists = section.groups.some((group) => group.includes(l));

        if (letterExists) {
          seatCount++;

          if (r === row && l === letter) {
            return config.startId + seatCount - 1;
          }
        }
      }
    }
  }

  return null;
}

// Estado de ocupación para click/tooltip
const seatData = new Map(); // key: "12A" -> passenger | null
const seatIdMapping = new Map(); // key: numeric_id -> "12A", value: "12A" -> numeric_id
// Indicador de check-in en progreso
let isCheckingIn = false;
// Última selección de vuelo válida
let lastFlightSelection = null;
// Indica si ya se realizó un check-in en el vuelo actual
let hasCheckedIn = false;

function disableControlsDuringCheckIn() {
  const loadBtn = document.getElementById("load");
  const flightSelect = document.getElementById("flightId");
  const resetBtn = document.getElementById("reset");
  if (loadBtn) loadBtn.disabled = true;
  if (flightSelect) flightSelect.disabled = true;
  if (resetBtn) resetBtn.disabled = true;
  // Bloquear interacciones con la zona de asientos mientras el check-in está en progreso
  try {
    const airplaneContainer = document.getElementById("airplane");
    if (airplaneContainer) {
      airplaneContainer.classList.add("airplane--loading");
      airplaneContainer.setAttribute("aria-busy", "true");
    }
    const out = document.getElementById("passengerInfo");
    if (out) out.textContent = "Cargando información...";
  } catch (e) {
    console.warn(
      "No se pudo deshabilitar la interacción con la zona de asientos:",
      e
    );
  }
}

function enableControlsAfterPainting() {
  const loadBtn = document.getElementById("load");
  const flightSelect = document.getElementById("flightId");
  const resetBtn = document.getElementById("reset");
  if (loadBtn) loadBtn.disabled = false;
  if (flightSelect) flightSelect.disabled = false;
  if (resetBtn) resetBtn.disabled = !hasCheckedIn;
  // Restaurar interacción con la zona de asientos
  try {
    const airplaneContainer = document.getElementById("airplane");
    if (airplaneContainer) {
      airplaneContainer.classList.remove("airplane--loading");
      airplaneContainer.removeAttribute("aria-busy");
    }
    // Si aún no hay selección concreta, restaurar mensaje por defecto
    const out = document.getElementById("passengerInfo");
    if (out) {
      if (hasCheckedIn) {
        out.textContent =
          "Información cargada — haz click en un asiento para ver los detalles";
      } else {
        out.textContent = "Elige un asiento para ver los detalles del pasajero";
      }
    }
  } catch (e) {
    console.warn(
      "No se pudo restaurar la interacción con la zona de asientos:",
      e
    );
  }
}

// Inicializar el avión cuando cambie el vuelo seleccionado
function initializeAirplane() {
  const flightIdRaw = document.getElementById("flightId").value;
  const flightId = isNaN(parseInt(flightIdRaw))
    ? flightIdRaw
    : parseInt(flightIdRaw);
  // Intentar obtener por clave string o number
  const airplaneId =
    flightsAirplanes[flightId] ?? flightsAirplanes[String(flightId)];

  // Limpiar estados anteriores
  try {
    seatData.clear();
    seatIdMapping.clear();
    clearGroupHighlight();
    const out = document.getElementById("passengerInfo");
    if (out) out.textContent = "Elige un asiento para ver más detalles.";
    const summaryEl = document.getElementById("passengerSummary");
    if (summaryEl) summaryEl.textContent = "";
  } catch (e) {
    console.warn("Error limpiando estado previo:", e);
  }

  // Guardar la selección actual como válida
  try {
    lastFlightSelection = document.getElementById("flightId").value;
  } catch (e) {
    console.warn("No se pudo guardar la selección de vuelo:", e);
  }

  // Mientras no se haga check-in, reset no debe estar disponible
  try {
    hasCheckedIn = false;
    const resetBtn = document.getElementById("reset");
    if (resetBtn) resetBtn.disabled = true;
  } catch (e) {
    console.warn("No se pudo deshabilitar el botón reset:", e);
  }

  // Actualizar la información del avión (nombre, total de asientos y leyenda)
  updateAirplaneInfo(airplaneId);
  renderPlaneHorizontal(airplaneId);
}

// Inicializar al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  initializeAirplane();

  // Reinicializar cuando cambie el vuelo seleccionado
  const flightSelect = document.getElementById("flightId");
  if (flightSelect) {
    flightSelect.addEventListener("change", () => {
      if (isCheckingIn) {
        // Revertir selección al último vuelo válido
        try {
          if (lastFlightSelection !== null) {
            flightSelect.value = lastFlightSelection;
          }
        } catch (e) {
          console.warn("No se pudo revertir la selección de vuelo:", e);
        }
        alert("Espera a que termine el check-in antes de cambiar de vuelo.");
        return;
      }

      // Limpiar la información que se muestra abajo y quitar resaltados al cambiar de vuelo
      try {
        clearGroupHighlight();
        const out = document.getElementById("passengerInfo");
        if (out) out.textContent = "Elige un asiento para ver más detalles.";
        const summaryEl = document.getElementById("passengerSummary");
        if (summaryEl) summaryEl.textContent = "";
      } catch (e) {
        console.warn("Error limpiando UI al cambiar de vuelo:", e);
      }

      initializeAirplane();
    });
  } else {
    console.warn("Elemento #flightId no encontrado al registrar evento change");
  }

  // Botón de carga de pasajeros
  const loadBtn = document.getElementById("load");
  if (loadBtn) {
    loadBtn.addEventListener("click", async () => {
      if (isCheckingIn) {
        console.warn(
          "Check-in en progreso: espere a que termine antes de iniciar otro check-in."
        );
        return;
      }

      const flightId = document.getElementById("flightId").value;

      // Limpiar asientos ocupados antes de cargar nuevos
      isCheckingIn = true;
      clearOccupiedSeats();

      try {
        // Consumir API y pintar secuencialmente
        console.log(
          "Haciendo fetch a:",
          `https://andes-airlines-checkin-production.up.railway.app/flights/${flightId}/passengers`
        );
        const res = await fetch(
          `https://andes-airlines-checkin-production.up.railway.app/flights/${flightId}/passengers`
        );
        console.log("Respuesta del servidor:", res.status, res.statusText);

        if (!res.ok) {
          throw new Error(
            `Error del servidor: ${res.status} ${res.statusText}`
          );
        }

        const json = await res.json();

        // Actualizar la info superior con posible información de vuelo
        try {
          const airplaneId = flightsAirplanes[flightId];
          updateAirplaneInfo(airplaneId);
        } catch (e) {
          console.warn(
            "No se pudo actualizar airplaneInfo con detalles de vuelo:",
            e
          );
        }

        if (json.data && json.data.passengers) {
          await paintPassengersSequentially(json.data.passengers);
        } else {
          console.error("Estructura de datos inesperada:", json);
        }
      } catch (error) {
        console.error("Error al cargar pasajeros:", error);
        alert(`Error al cargar pasajeros: ${error.message}`);
      }
    });
  } else {
    console.warn("Elemento #load no encontrado al registrar evento click");
  }

  // Botón restablecer
  const resetBtn = document.getElementById("reset");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (isCheckingIn) {
        alert("Espera a que termine el check-in antes de restablecer.");
        return;
      }

      // Deshabilitar inmediatamente para evitar re-clicks mientras se ejecuta el reset
      try {
        resetBtn.disabled = true;
      } catch (e) {
        console.warn(
          "No se pudo deshabilitar el botón reset inmediatamente:",
          e
        );
      }
      resetToInitialState();
    });
  }
});

function resetToInitialState() {
  try {
    const flightId = parseInt(document.getElementById("flightId").value);

    // Limpiar datos dinámicos de seatData, pero mantener entradas pre-ocupadas
    const preOccupied = new Set(preOccupiedSeatsByFlight[flightId] || []);

    // Recorremos seatIdMapping para actualizar DOM y seatData
    seatIdMapping.forEach((alphaId, key) => {
      // Queremos iterar sobre las entradas numéricas (key es numeric id)
      if (typeof key === "number") {
        const numericId = key;
        const seatAlpha = alphaId; // valor guardado es el ID alfanumérico
        const seatEl = document.getElementById(`seat-${seatAlpha}`);

        // Si el asiento existe en DOM
        if (seatEl) {
          seatEl.classList.remove("highlighted", "minor");

          if (preOccupied.has(numericId)) {
            // Mantener el texto del asiento (por ejemplo "A1") y el título que indica pre-ocupado
            seatEl.classList.add("occupied");
            seatEl.title = "Asiento ocupado";
            seatEl.textContent = seatAlpha;

            // Mantener en seatData la marca de pre-ocupado sin datos de pasajero
            seatData.set(seatAlpha, {
              name: "",
              dni: "",
              isPreOccupied: true,
              seatId: numericId,
            });
          } else {
            // Quitar ocupado y limpiar cualquier título/texto extra
            seatEl.classList.remove("occupied");
            seatEl.title = "Asiento libre";
            seatEl.textContent = seatAlpha;

            seatData.set(seatAlpha, null);
          }
        }
      }
    });

    // Limpiar información del pasajero y el resumen fijo
    const out = document.getElementById("passengerInfo");
    if (out) out.textContent = "Elige un asiento para ver más detalles.";
    const summaryEl = document.getElementById("passengerSummary");
    if (summaryEl) summaryEl.textContent = "";

    // Marcar que ya no hay check-in activo y asegurar que el botón reset quede deshabilitado
    try {
      hasCheckedIn = false;
      const resetBtn = document.getElementById("reset");
      if (resetBtn) resetBtn.disabled = true;
    } catch (e) {
      console.warn("No se pudo actualizar el estado del botón reset:", e);
    }
  } catch (e) {
    console.error("Error al restablecer el estado:", e);
  }
}

function updateAirplaneInfo(airplaneId) {
  const container = document.getElementById("airplane-info");
  if (!container) {
    console.error(
      "Elemento #airplane-info no encontrado en el DOM. Imposible mostrar info del avión."
    );
    return;
  }
  const info = airplaneInfo[airplaneId];

  if (!info) {
    console.warn(
      "Información del avión no encontrada para airplaneId:",
      airplaneId
    );
    container.innerHTML = `<h3>Información no disponible</h3><div class="legend-inline"><span>Seleccione un vuelo válido</span></div>`;
    return;
  }

  container.innerHTML = `
    <h3>${info.name} | ${info.totalSeats} pasajeros</h3>
    <div class="seat-legend">
      <div class="legend-item"><div class="legend-chip free"></div><span>Asiento libre</span></div>
      <div class="legend-item"><div class="legend-chip assigned"></div><span>Asiento ocupado</span></div>
      <div class="legend-item"><div class="legend-chip minor"></div><span>Asiento con menor</span></div>
    </div>
  `;
}

function renderPlaneHorizontal(airplaneId) {
  const container = document.getElementById("airplane");
  container.innerHTML = "";
  seatData.clear();
  seatIdMapping.clear();

  const sections = seatLayout[airplaneId];
  const config = airplaneConfig[airplaneId];

  if (!config) {
    console.error("Configuración no encontrada para avión:", airplaneId);
    return;
  }

  // Obtener el vuelo actual para los asientos pre-ocupados
  const flightId = parseInt(document.getElementById("flightId").value);
  const preOccupiedSeats = preOccupiedSeatsByFlight[flightId] || [];

  sections.forEach((section, sectionIndex) => {
    // Crear contenedor de sección
    const sectionEl = document.createElement("div");
    sectionEl.className = `section ${section.className}`;

    // Título de la sección
    const sectionTitle = document.createElement("div");
    sectionTitle.className = "section-title";
    const className =
      section.className === "first"
        ? "Primera clase"
        : section.className === "premium"
        ? "Económica premium"
        : "Económica";
    sectionTitle.textContent = className;
    sectionEl.appendChild(sectionTitle);

    // Crear contenedor de grilla para esta sección
    const gridContainer = document.createElement("div");
    gridContainer.className = "seat-grid";

    // Obtener todas las letras que existen en esta sección
    const existingLetters = [...new Set(section.groups.flat())].sort();

    // Header con números de fila
    const headerRow = document.createElement("div");
    headerRow.className = "header-row";

    // Esquina vacía
    const corner = document.createElement("div");
    corner.className = "corner";
    headerRow.appendChild(corner);

    // Números de columna (filas)
    for (let r = section.rows[0]; r <= section.rows[1]; r++) {
      const colNumber = document.createElement("div");
      colNumber.className = "col-number";
      colNumber.textContent = r;
      headerRow.appendChild(colNumber);
    }
    gridContainer.appendChild(headerRow);

    // Crear filas para cada letra (usar todas las letras del avión para alineación)
    const reversedAllLetters = [...config.letters].reverse();

    reversedAllLetters.forEach((letter) => {
      const letterRow = document.createElement("div");
      letterRow.className = "letter-row";

      // Etiqueta de letra (siempre mostrar)
      const letterLabel = document.createElement("div");
      letterLabel.className = "row-letter";
      letterLabel.textContent = letter;
      letterRow.appendChild(letterLabel);

      // Verificar si esta letra existe en esta sección
      const letterExists = existingLetters.includes(letter);

      // Crear celdas para cada columna numérica
      for (let r = section.rows[0]; r <= section.rows[1]; r++) {
        if (letterExists) {
          // Crear asiento real
          const alphaId = `${r}${letter}`;
          const numericId = calculateSeatNumericId(airplaneId, r, letter);

          if (numericId !== null) {
            const seatEl = document.createElement("div");
            seatEl.className = "seat";
            seatEl.id = `seat-${alphaId}`;
            seatEl.textContent = alphaId;

            // Verificar si este asiento está pre-ocupado para este vuelo
            const isPreOccupied = preOccupiedSeats.includes(numericId);

            if (isPreOccupied) {
              seatEl.classList.add("occupied");
              seatEl.title = "Asiento ocupado";
              seatData.set(alphaId, {
                name: "",
                dni: "",
                isPreOccupied: true,
                seatId: numericId,
              });
            } else {
              seatEl.title = "Asiento libre";
              seatData.set(alphaId, null);
            }

            // Crear mapeo bidireccional
            seatIdMapping.set(numericId, alphaId);
            seatIdMapping.set(alphaId, numericId);

            seatEl.addEventListener("click", () => {
              if (isCheckingIn) return; // Ignorar clicks mientras el check-in está en progreso
              showPassengerInfo(seatData.get(alphaId), alphaId);
            });
            letterRow.appendChild(seatEl);
          }
        } else {
          // Crear espacio vacío (pasillo)
          const emptySpace = document.createElement("div");
          emptySpace.className = "aisle-space";
          letterRow.appendChild(emptySpace);
        }
      }

      gridContainer.appendChild(letterRow);
    });

    sectionEl.appendChild(gridContainer);
    container.appendChild(sectionEl);
  });
}

function clearOccupiedSeats() {
  const flightId = parseInt(document.getElementById("flightId").value);
  const preOccupiedSeats = new Set(preOccupiedSeatsByFlight[flightId] || []);

  // Limpiar solo los asientos ocupados dinámicamente, preservando los pre-ocupados
  seatData.forEach((passenger, alphaNumericSeatId) => {
    const numericId = seatIdMapping.get(alphaNumericSeatId);
    const isPreOccupied = preOccupiedSeats.has(numericId);
    const seatEl = document.getElementById(`seat-${alphaNumericSeatId}`);

    if (seatEl) {
      // Primero removemos todas las clases dinámicas
      seatEl.classList.remove("occupied", "highlighted", "minor");
      
      if (isPreOccupied) {
        // Re-aplicar el estado pre-ocupado
        seatEl.classList.add("occupied");
        seatEl.title = "Asiento ocupado";
        // Mantener los datos de pre-ocupado en seatData
        seatData.set(alphaNumericSeatId, {
          name: "",
          dni: "",
          isPreOccupied: true,
          seatId: numericId
        });
      } else {
        // Limpiar completamente los asientos no pre-ocupados
        seatEl.title = "Asiento libre";
        seatEl.textContent = alphaNumericSeatId;
        seatData.set(alphaNumericSeatId, null);
      }
    }
  });
}

function paintPassengersSequentially(passengers) {
  const flightId = parseInt(document.getElementById("flightId").value);
  const preOccupiedSeats = new Set(preOccupiedSeatsByFlight[flightId] || []);

  return new Promise((resolve) => {
    let i = 0;
    isCheckingIn = true;
    disableControlsDuringCheckIn();

    const timer = setInterval(() => {
      if (i >= passengers.length) {
        clearInterval(timer);
        isCheckingIn = false;
        hasCheckedIn = true;
        enableControlsAfterPainting();
        resolve();
        return;
      }

      const p = passengers[i];
      const alphaNumericSeatId = seatIdMapping.get(p.seatId);

      if (!alphaNumericSeatId) {
        console.error(`No se encontró mapeo para seatId: ${p.seatId}`);
        i++;
        return;
      }

      const seatEl = document.getElementById(`seat-${alphaNumericSeatId}`);

      if (seatEl) {
        const isPreOccupied = preOccupiedSeats.has(p.seatId);

        // Preservar el estado de pre-ocupado si aplica
        if (!isPreOccupied) {
          seatEl.classList.add("occupied");
          
          const isMinor = p.age < 18;
          if (isMinor) {
            seatEl.classList.add("minor");
          }
          seatEl.textContent = alphaNumericSeatId;

          const stateTags = [];
          if (isMinor) stateTags.push("MENOR");
          seatEl.title = `${p.name} (${p.dni}) · Reserva ${p.purchaseId}${
            stateTags.length ? " · " + stateTags.join(" · ") : ""
          }`;

          // Solo actualizar seatData para asientos no pre-ocupados
          seatData.set(alphaNumericSeatId, p);
        }
      } else {
        console.error(
          `No se encontró el elemento del asiento: seat-${alphaNumericSeatId}`
        );
      }
      i++;
    }, 50);
  });
}

function showPassengerInfo(p, alphaId) {
  const out = document.getElementById("passengerInfo");

  clearGroupHighlight();

  // Si se está realizando el proceso de check-in, mostrar estado de carga
  if (isCheckingIn) {
    if (out) out.textContent = "Cargando información...";
    return;
  }

  // Si no hay pasajero asignado, o el objeto no contiene datos reales (sin name),
  // tratamos el asiento como libre (excepto si es un asiento pre-ocupado).
  if (!p || (!p.name && !p.isPreOccupied)) {
    const seatLabel = alphaId || (p && seatIdMapping.get(p.seatId)) || "-";
    out.textContent = `Asiento: ${seatLabel}.
Este asiento está libre.`;
    const summaryEl = document.getElementById("passengerSummary");
    if (summaryEl) summaryEl.textContent = "";
    return;
  }

  // Verificar si es un asiento pre-ocupado SIN datos reales
  if (p.isPreOccupied && !p.name) {
    // Mostrar el identificador alfanumérico del asiento si está disponible
    const alphaSeat = seatIdMapping.get(p.seatId) || p.seatId;
    out.textContent = `Asiento: ${alphaSeat}.\nEste asiento fue reservado antes del check‑in.\nSi necesitas ver los datos del pasajero, realiza el proceso de check‑in.`;
    return;
  }

  // Debug: mostrar todos los datos actuales
  seatData.forEach((passenger, seatId) => {
    // no-op: previously used for debug logging
  });

  // Resaltar todos los asientos del mismo grupo de compra
  highlightPurchaseGroup(p.purchaseId);

  // Obtener todos los acompañantes (mismo purchaseId)
  const companions = getCompanions(p.purchaseId);

  if (companions.length === 1) {
    // Reserva individual
    const summaryEl = document.getElementById("passengerSummary");
    if (summaryEl)
      summaryEl.textContent = `RESERVA: 1 pasajero (ID de compra ${p.purchaseId})`;

    out.textContent = `Asiento: ${companions[0].alphaNumericSeatId}
Nombre: ${p.name}
DNI: ${p.dni}
Edad: ${p.age} años
País: ${p.country}`;
  } else {
    // Reserva grupal — listar acompañantes de forma clara
    const summaryEl = document.getElementById("passengerSummary");
    if (summaryEl)
      summaryEl.textContent = `RESERVA: ${companions.length} pasajeros (ID de compra ${p.purchaseId})`;

    let details = "";
    companions.forEach((companion, index) => {
      const isMinor = companion.age < 18;
      details += `${index + 1}. ${companion.name}${
        isMinor ? " (menor)" : ""
      }\n`;
      details += `   Asiento: ${companion.alphaNumericSeatId}\n`;
      details += `   DNI: ${companion.dni} | Edad: ${companion.age} años | País: ${companion.country}\n\n`;
    });

    out.textContent = details.trim();
  }
}

function getCompanions(purchaseId) {
  const companions = [];
  seatData.forEach((passenger, alphaNumericSeatId) => {
    // Incluir pasajeros reales (con nombre) que tengan el mismo purchaseId, sin importar si estaban pre-ocupados
    if (passenger && passenger.name && passenger.purchaseId === purchaseId) {
      // Agregar el ID alfanumérico como propiedad para ordenamiento
      const companionWithSeat = { ...passenger, alphaNumericSeatId };
      companions.push(companionWithSeat);
    }
  });

  // Ordenar por asiento para mostrar en orden
  return companions.sort((a, b) => {
    // Extraer número de fila y letra para ordenar correctamente
    const parseAsiento = (asiento) => {
      const match = asiento.match(/(\d+)([A-Z])/);
      return match ? [parseInt(match[1]), match[2]] : [0, "A"];
    };

    const [numA, letA] = parseAsiento(a.alphaNumericSeatId);
    const [numB, letB] = parseAsiento(b.alphaNumericSeatId);

    if (numA !== numB) return numA - numB;
    return letA.localeCompare(letB);
  });
}

function highlightPurchaseGroup(purchaseId) {
  // Recorrer todos los asientos y resaltar los del mismo purchaseId (incluir todos los pasajeros reales)
  seatData.forEach((passenger, seatId) => {
    if (passenger && passenger.name && passenger.purchaseId === purchaseId) {
      const seatEl = document.getElementById(`seat-${seatId}`);
      if (seatEl) {
        seatEl.classList.add("highlighted");
      }
    }
  });
}

function clearGroupHighlight() {
  // Quitar el resaltado de todos los asientos
  seatData.forEach((passenger, seatId) => {
    const seatEl = document.getElementById(`seat-${seatId}`);
    if (seatEl) {
      seatEl.classList.remove("highlighted");
    }
  });
}