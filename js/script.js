// ===================== PROJECT DATA =====================
const projects = [
  {
    slug: "geodatabase",
    color: "blue",
    title: "Geodatabase Creation, Data Cleaning & Spatial Querying",
    tags: ["ArcGIS", "QGIS", "SQL", "Python", "GeoPandas"],
    desc: "Created geodatabases with feature datasets, CRS, attribute domains, and topology rules. Performed vector QC and executed complex spatial queries for data extraction and multi-table joins directly applicable to ward-level shapefile and geodatabase.",
    images: [
      { src: "images/projects/geodatabase/Fig5-3_Components_of_Geodatabase.png", caption: "Geodatabase components — spreadsheets, raster, and vector data integration" },
      { src: "images/projects/geodatabase/Fig5-1_DDM_Framework_DataIntegration.png", caption: "Disease Data Model (DDM) framework for multi-source data integration" }
    ]
  },
  {
    slug: "hotspot",
    color: "green",
    title: "Spatio-Temporal Cluster & Hotspot Analysis",
    tags: ["ArcGIS", "QGIS", "SQL", "Python", "GeoPandas"],
    desc: "Hotspot analysis, Kernel Density Estimation, Quadrat Analysis, Nearest Neighbourhood analysis, Distribution analysis, Standard Deviational Ellipse, SATSCAN, Origin-Destination Analysis, Service-Area / Location Allocation.",
    images: [
      { src: "images/projects/hotspot/KDE_Map_2021_2022.png", caption: "Kernel Density Estimation of dengue case intensity, 2021 vs. 2022" },
      { src: "images/projects/hotspot/SDE_StandardDeviationalEllipse_2021_2022.png", caption: "Standard Deviational Ellipse & median centre of dengue cases" },
      { src: "images/projects/hotspot/Hotspot_Map_2022.jpg", caption: "Hotspot / cold-spot classification, 2022" },
      { src: "images/projects/hotspot/Dengue_Incidence_Map_Ward.png", caption: "Ward-level dengue incidence map" },
      { src: "images/projects/hotspot/cluster_tree.png", caption: "Space-time transmission cluster tree structure" },
      { src: "images/projects/hotspot/local_morans_i.jpeg", caption: "Local Moran's I cluster and outlier analysis" }
    ]
  },
  {
    slug: "risk-assessment",
    color: "orange",
    title: "Multi-Factor Environmental Risk Assessment",
    tags: ["Sentinel-1", "CartoDEM", "ArcGIS", "OSM"],
    desc: "Composite risk index combining Sentinel-1 waterlogging, CartoDEM drainage, LULC change metrics, road proximity, and socio-demographic layers — using MCDM, AHP, and GWR.",
    images: [
      { src: "images/projects/risk-assessment/composite_risk_map.png", caption: "Composite multi-factor risk classification map (Very Low to Very High)" },
      { src: "images/projects/risk-assessment/Composite_Risk_Map_Final.png", caption: "AHP-based composite risk map with ward-level labels" },
      { src: "images/projects/risk-assessment/District_Risk_Map.png", caption: "District-level risk classification" },
      { src: "images/projects/risk-assessment/AHP_Weights.png", caption: "AHP criteria weighting used in the composite risk index" }
    ]
  },
  {
    slug: "lulc-change",
    color: "yellow",
    title: "Spatio-Temporal LULC Change Detection",
    tags: ["Sentinel-2", "Landsat 5/7/8", "ArcGIS", "Google Earth Engine", "R"],
    desc: "Multi-temporal satellite imagery analysis, LULC classification, vegetation index time-series (NDVI, EVI, SAVI), and seasonal / temporal change detection linked to disease proximity analysis.",
    images: [
      { src: "images/projects/lulc-change/Sentinel2_L1C_L2A_Processing.png", caption: "Sentinel-2 L1C to L2A atmospheric correction & pre-processing workflow" },
      { src: "images/projects/lulc-change/LULC_BarChart_2021_2022.png", caption: "LULC class-wise area statistics, 2021 vs. 2022" },
      { src: "images/projects/lulc-change/lulc_proximity_methodology.png", caption: "LULC classification & proximity-analysis methodology workflow" }
    ]
  },
  {
    slug: "dengue-prediction",
    color: "blue",
    title: "Geo-Spatial Dengue Risk Prediction Tool",
    tags: ["Sentinel-2", "Landsat 8", "SRTM", "Python", "scikit-learn"],
    desc: "End-to-end ML pipeline combining NDVI/EVI/LST covariates, LULC change metrics, DEM-derived waterlogging, and temporal dynamics for geospatial risk forecasting — with geotagging, incidence assessment, and field validation.",
    images: [
      { src: "images/projects/dengue-prediction/RandomForest_Prediction_Map_Final.png", caption: "Dengue risk prediction by Random Forest classifier" },
      { src: "images/projects/dengue-prediction/District_Prediction_Map.png", caption: "District-level predicted dengue risk" },
      { src: "images/projects/dengue-prediction/variable_importance.png", caption: "Relative variable importance in the ML prediction model" },
      { src: "images/projects/dengue-prediction/ML_Model_Comparison_Heatmap.png", caption: "Performance comparison across ML models" },
      { src: "images/projects/dengue-prediction/ml_methodology.png", caption: "Machine-learning methodology workflow" },
      { src: "images/projects/dengue-prediction/correlation.png", caption: "Correlation of climate & environmental covariates with dengue transmission" }
    ]
  },
  {
    slug: "road-network",
    color: "green",
    title: "Road Network Accessibility & Service Area Analysis",
    tags: ["ArcGIS Network Analyst", "QGIS", "OSM", "Python"],
    desc: "Developed road-network-based accessibility models for healthcare, emergency response, and public service coverage assessment — shortest-path routing, service-area generation, travel-time estimation, and location-allocation analysis.",
    images: [
      { src: "images/projects/road-network/avg_distance_to_hospital.png", caption: "Average patient travel distance to sentinel surveillance hospitals (2015–2022)" },
      { src: "images/projects/road-network/Road_Classification_Map.png", caption: "Road network classification (arterial, sub-arterial, collector, local)" },
      { src: "images/projects/road-network/Road_SocioEconomic_Condition.png", caption: "Road network overlaid with socio-economic conditions" },
      { src: "images/projects/road-network/Distance_Cases_to_Road.png", caption: "Distance of dengue cases to nearest road network" }
    ]
  },
  {
    slug: "flood-susceptibility",
    color: "orange",
    title: "Flood Susceptibility & Waterlogging Mapping",
    tags: ["Sentinel-1", "Sentinel-2", "CartoDEM", "ArcGIS", "Google Earth Engine"],
    desc: "Generated flood susceptibility and urban waterlogging maps using SAR backscatter analysis, DEM-derived hydrological parameters, rainfall proxies, drainage density, and land cover — via weighted overlay and spatial modelling.",
    images: [
      { src: "images/projects/flood-susceptibility/Waterlogging_Susceptibility_Map.png", caption: "Waterlogging susceptibility zonation with identified sites" },
      { src: "images/projects/flood-susceptibility/Potential_Waterlogging_Areas.png", caption: "Potential waterlogging areas by elevation class" },
      { src: "images/projects/flood-susceptibility/Flow_Accumulation_Map.png", caption: "DEM-derived flow accumulation analysis" },
      { src: "images/projects/flood-susceptibility/slope_map.png", caption: "DEM-derived slope classification" },
      { src: "images/projects/flood-susceptibility/dengue_waterlog_map.png", caption: "Dengue case intensity vs. buffered waterlogging sites" }
    ]
  },
  {
    slug: "urban-growth",
    color: "yellow",
    title: "Urban Growth & Built-Up Expansion Analysis",
    tags: ["Landsat", "Sentinel-2", "Google Earth Engine", "ArcGIS"],
    desc: "Urban expansion analysis using multi-temporal satellite imagery and built-up indices such as NDBI and UI. Assessed urban sprawl patterns, peri-urban growth, and land transformation trends through spatial-temporal change detection.",
    images: [
      { src: "images/projects/urban-growth/LULC_Change_2021_2022.png", caption: "Built-up expansion by source land-cover class, 2021–2022" },
      { src: "images/projects/urban-growth/LULC_Change_2015_2016.png", caption: "Built-up expansion by source land-cover class, 2015–2016" },
      { src: "images/projects/urban-growth/Proximity_to_BuiltUp_Map.png", caption: "Proximity to built-up areas — input layer for sprawl analysis" }
    ]
  }
];

// ===================== RENDER PROJECT CARDS =====================
function renderGrid(containerEl, list, listName){
  list.forEach((proj, projIndex) => {
    const card = document.createElement("div");
    card.className = `project-card proj-${proj.color}`;

    const hasImages = proj.images && proj.images.length > 0;
    const thumbHtml = hasImages
      ? `<div class="project-thumb" data-list="${listName}" data-project="${projIndex}">
           <img src="${proj.images[0].src}" alt="${proj.title}" loading="lazy">
           <div class="thumb-overlay"><span>View ${proj.images.length} image${proj.images.length > 1 ? "s" : ""} →</span></div>
         </div>`
      : `<div class="project-thumb no-image">Gallery coming soon</div>`;

    card.innerHTML = `
      ${thumbHtml}
      <div class="project-body">
        <h3>${proj.title}</h3>
        <div class="project-tags">${proj.tags.map(t => `<span>${t}</span>`).join("")}</div>
        <p class="project-desc">${proj.desc}</p>
        ${hasImages ? `<span class="project-link" data-list="${listName}" data-project="${projIndex}">View Project Gallery →</span>` : ""}
      </div>
    `;
    containerEl.appendChild(card);
  });
}

const grid = document.getElementById("projectsGrid");
renderGrid(grid, projects, "research");

// ===================== LIGHTBOX =====================
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxCounter = document.getElementById("lightboxCounter");
const listRegistry = { research: projects };
let currentList = null;
let currentProject = null;
let currentIndex = 0;

function openLightbox(listName, projIndex, imgIndex = 0){
  const list = listRegistry[listName];
  const proj = list[projIndex];
  if (!proj.images || proj.images.length === 0) return;
  currentList = listName;
  currentProject = projIndex;
  currentIndex = imgIndex;
  renderLightbox();
  lightbox.classList.add("active");
  document.body.style.overflow = "hidden";
}

function renderLightbox(){
  const proj = listRegistry[currentList][currentProject];
  const img = proj.images[currentIndex];
  lightboxImg.src = img.src;
  lightboxImg.alt = img.caption;
  lightboxCaption.textContent = img.caption;
  lightboxCounter.textContent = `${proj.title} — ${currentIndex + 1} / ${proj.images.length}`;
}

function closeLightbox(){
  lightbox.classList.remove("active");
  document.body.style.overflow = "";
}

function showNext(){
  const proj = listRegistry[currentList][currentProject];
  currentIndex = (currentIndex + 1) % proj.images.length;
  renderLightbox();
}
function showPrev(){
  const proj = listRegistry[currentList][currentProject];
  currentIndex = (currentIndex - 1 + proj.images.length) % proj.images.length;
  renderLightbox();
}

function handleGridClick(e){
  const target = e.target.closest("[data-project]");
  if (!target) return;
  openLightbox(target.dataset.list, parseInt(target.dataset.project, 10), 0);
}
grid.addEventListener("click", handleGridClick);

document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
document.getElementById("lightboxNext").addEventListener("click", showNext);
document.getElementById("lightboxPrev").addEventListener("click", showPrev);
lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });

document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("active")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowRight") showNext();
  if (e.key === "ArrowLeft") showPrev();
});

// ===================== MOBILE NAV =====================
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");
navToggle.addEventListener("click", () => mainNav.classList.toggle("open"));
mainNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mainNav.classList.remove("open")));

// ===================== SCROLL REVEAL =====================
const revealTargets = document.querySelectorAll(".project-card, .timeline-card, .stat-card, .mosaic-tile, .skill-card, .pub-item");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealTargets.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(16px)";
  el.style.transition = "opacity .5s ease, transform .5s ease";
  observer.observe(el);
});
