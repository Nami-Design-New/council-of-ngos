var simplemaps_countrymap_mapdata = {
  main_settings: {
    //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#000",
    state_description: "",
    state_color: "#8EC2FE",
    state_hover_color: "#3B729F",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    location_description: "",
    location_url: "",
    location_color: "#333",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "square",
    location_image_source: "../assets/empty-logo.svg",
    location_border_color: "#777",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",

    //Label defaults
    label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size: 16,
    label_font: "Arial",
    label_display: "auto",
    label_scale: "yes",
    hide_labels: "no",
    hide_eastern_labels: "no",

    //Zoom settings
    zoom: "yes",
    manual_zoom: "yes",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,

    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "15px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",

    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "detect",
    state_image_url: "",
    state_image_position: "",
    location_image_url: "../assets/empty-logo.svg",
  },
  state_specific: {
    SA01: {
      hover_color: "#8EC2FE",
      name: "الرياض",
      description: " ",
      color: "#8EC2FE",
    },
    SA02: {
      hover_color: "#FF8C8C",
      name: "مكة",
      description: " ",
      color: "#FF8C8C",
    },
    SA03: {
      hover_color: "#E0B2BA",
      name: "المدينه المنورة",
      description: " ",
      color: "#E0B2BA",
    },
    SA04: {
      hover_color: "#FF8C8C",
      name: "المنطقة الشرقية",
      description: " ",
      color: "#FF8C8C",
    },
    SA05: {
      hover_color: "#0552B5",
      name: "القصيم",
      description: " ",
      color: "#0552B5",
    },
    SA06: {
      hover_color: "#FF8C8C",
      name: "حائل",
      description: " ",
      color: "#FF8C8C",
    },
    SA07: {
      hover_color: "#8EC2FE",
      name: "تبوك",
      description: " ",
      color: "#8EC2FE",
    },
    SA08: {
      hover_color: "#8EC2FE",
      name: "منطقة الحدود الشمالية",
      description: " ",
      color: "#8EC2FE",
    },
    SA09: {
      hover_color: "#FF8C8C",
      name: "جازان",
      description: " ",
      color: "#FF8C8C",
    },
    SA10: {
      hover_color: "#E0B2BA",
      name: "نجران",
      description: " ",
      color: "#E0B2BA",
    },
    SA11: {
      hover_color: "#E0B2BA",
      name: "أبها",
      description: " ",
      color: "#E0B2BA",
    },
    SA12: {
      hover_color: "#0552B5",
      name: "الجوف",
      description: " ",
      color: "#0552B5",
    },
    SA14: {
      hover_color: "#8EC2FE",
      name: "عسير",
      description: " ",
      color: "#8EC2FE",
    },
  },
  locations: {
    // 0: {
    //   lat: "24.707883101213962",
    //   lng: " 46.68219649021059",
    //   name: "الرياض",
    //   image_url: "../assets/empty-logo.svg",
    // },
  },
  labels: {
    SA01: {
      name: "الرياض",
      parent_id: "SA01",
    },
    SA02: {
      name: "مكة",
      parent_id: "SA02",
    },
    SA03: {
      name: "المدينه المنورة",
      parent_id: "SA03",
    },
    SA04: {
      name: "المنطقة الشرقية",
      parent_id: "SA04",
    },
    SA05: {
      name: "القصيم",
      parent_id: "SA05",
    },
    SA06: {
      name: "حائل",
      parent_id: "SA06",
    },
    SA07: {
      name: "تبوك",
      parent_id: "SA07",
    },
    SA08: {
      name: "منطقة الحدود الشمالية",
      parent_id: "SA08",
    },
    SA09: {
      name: "جازان",
      parent_id: "SA09",
    },
    SA10: {
      name: "نجران",
      parent_id: "SA10",
    },
    SA11: {
      name: "أبها",
      parent_id: "SA11",
    },
    SA12: {
      name: "الجوف",
      parent_id: "SA12",
    },
    SA14: {
      name: "`عسير",
      parent_id: "SA14",
    },
  },
  legend: {
    entries: [],
  },
  regions: {},
};
