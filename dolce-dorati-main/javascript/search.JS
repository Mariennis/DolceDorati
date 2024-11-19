document.addEventListener("DOMContentLoaded", () => {
  const closeSearchBtn = document.querySelector(".close-search-btn"); // Botón "Cerrar"
  const searchOverlay = document.querySelector(".search-overlay"); // Fondo oscuro
  const searchModal = document.getElementById("searchModal"); // Contenedor del modal
  const searchInput = document.getElementById("searchInput"); // Campo de búsqueda
  const searchButton = document.getElementById("searchButton"); // Botón de buscar
  
    // Lógica para abrir y cerrar el modal
    document.addEventListener("DOMContentLoaded", () => {
    searchModal.style.display = "block"; // Mostrar modal al cargar
    });

    // Abrir el buscador automáticamente
    searchOverlay.classList.remove("hidden");
    searchOverlay.classList.add("active");
  
    // Cerrar el buscador
    closeButton.addEventListener("click", () => {
    searchOverlay.classList.add("hidden");
    window.location.href = "index.html";
    });
  
    // Escuchar evento de clic en "Buscar"
    searchButton.addEventListener("click", () => {
    handleSearch();
    });
  
    // También permitir redirigir al presionar Enter
    searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
    });
  
    // Función para manejar la búsqueda
    function handleSearch() {
    const searchTerm = searchInput.value.trim().toLowerCase(); 
    switch (searchTerm) {
      case "cupcake":
        window.location.href = "indexcup.html"; 
        break;
      case "pasteles":
        window.location.href = "index.html"; 
        break;
      case "galletas":
        window.location.href = "indexcookie.html"; 
        break;
      default:
        alert("No se encontraron resultados para: " + searchTerm);
        break;
     }
    }

    // Cerrar al hacer clic fuera del buscador
    searchOverlay.addEventListener("click", (e) => {
      if (e.target === searchOverlay) {
        searchOverlay.classList.remove("active");
        searchOverlay.classList.add("hidden");
      }
    });
  });
