    function searchGame() {
      var gameName = document.getElementById("searchInput").value.toLowerCase().trim();

      var games = {
        "subway surfers": "https://poki.com/en/g/subway-surfers",
        "moto x3m": "https://poki.com/en/g/moto-x3m",
        "scary teacher 3d": "https://poki.com/en/g/scary-teacher-3d",
        "minefun.io": "https://poki.com/en/g/minefun-io",
        "repuls.io": "https://poki.com/en/g/repuls-io",
        "hills of steel": "https://poki.com/en/g/hills-of-steel"
      };

      if (games[gameName]) {
        window.location.href = games[gameName];
      } else {
        alert("اللعبة غير موجودة. تأكد من الاسم الصحيح.");
      }
    }