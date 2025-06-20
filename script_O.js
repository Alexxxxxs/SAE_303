const width = 1400; // Augmenter la largeur
const height = 800; // Augmenter la hauteur

const projection = d3.geoConicConformal()
    .center([2.5, 46.5]) // Centré sur la France
    .scale(3500) // Ajuster l'échelle pour remplir l'espace
    .translate([width / 2, height / 2]); // Garder le centrage


// Marges pour éviter de couper les bords
const margin = {
    top: 20,
    right: 20,
    bottom: 20,
    left: 20
};




const svg = d3.select("#map")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Tooltip pour afficher les informations
const tooltip = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("display", "none");

// Génération des chemins avec la nouvelle projection
const path = d3.geoPath().projection(projection);

// Données des départements et parts d'électrique
const data = {
    "01": 22, "02": 12, "03": 15, "04": 16, "05": 13, "06": 21, "07": 21, "08": 15,
    "09": 16, "10": 20, "11": 17, "12": 17, "13": 28, "14": 19, "15": 14, "16": 22,
    "17": 17, "18": 15, "19": 16, "21": 17, "22": 20, "23": 14, "24": 17, "25": 16,
    "26": 21, "27": 20, "28": 17, "29": 21, "2A": 16, "2B": 21, "30": 23, "31": 22,
    "32": 22, "33": 19, "34": 21, "35": 25, "36": 13, "37": 21, "38": 21, "39": 16,
    "40": 16, "41": 18, "42": 21, "43": 19, "44": 22, "45": 18, "46": 17, "47": 18,
    "48": 14, "49": 19, "50": 24, "51": 16, "52": 15, "53": 21, "54": 19, "55": 16,
    "56": 17, "57": 20, "58": 11, "59": 16, "60": 16, "61": 15, "62": 18, "63": 20,
    "64": 17, "65": 16, "66": 16, "67": 26, "68": 25, "69": 18, "70": 17, "71": 16,
    "72": 16, "73": 18, "74": 21, "75": 15, "76": 18, "77": 19, "78": 17, "79": 23,
    "80": 16, "81": 22, "82": 25, "83": 17, "84": 19, "85": 19, "86": 23, "87": 17,
    "88": 18, "89": 17, "90": 17, "91": 16, "92": 14, "93": 14, "94": 15, "95": 16
};

// Échelle de couleur pour les parts d'électrique
const colorScale = d3.scaleLinear()
    .domain([10, 30]) // Min et max des parts d'électrique
    .range(["#d1e2f3", "#08306b"]); // Couleurs de dégradé

// Charger le fichier GeoJSON
d3.json("https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements-version-simplifiee.geojson")
    .then(dataGeo => {
        svg.selectAll("path")
            .data(dataGeo.features)
            .enter()
            .append("path")
            .attr("d", path)
            .attr("data-num", d => d.properties.code)
            .style("fill", d => colorScale(data[d.properties.code] || 0)) // Colorier selon la part
            .style("stroke", "white")
            .style("stroke-width", "0.5")
            .on("mouseover", (event, d) => {
                const code = d.properties.code;
                const part = data[code] || "Données non disponibles";
                tooltip.style("display", "block")
                    .style("left", (event.pageX + 10) + "px")
                    .style("top", (event.pageY - 10) + "px")
                    .html(`Département : ${d.properties.nom} (${code})<br>Part de voitures électriques : ${part}%`);
                d3.select(event.target).style("fill", "#2ecc71");
            })
            .on("mouseout", (event) => {
                const code = event.target.getAttribute("data-num");
                d3.select(event.target).style("fill", colorScale(data[code] || 0));
                tooltip.style("display", "none");
            });
    })
    .catch(error => console.error("Erreur lors du chargement des données GeoJSON :", error));
