
      document.addEventListener("DOMContentLoaded", function () {
        const ctxRole = document.getElementById("teamRolesChart");
        if (ctxRole) {
          new Chart(ctxRole.getContext("2d"), {
            type: "doughnut",
            data: {
              labels: ["Frontend", "Backend", "UI/UX", "Management", "Data"],
              datasets: [
                {
                  data: [35, 25, 15, 15, 10],
                  backgroundColor: [
                    "#142766",
                    "#8d774a",
                    "#8d774a",
                    "#eef6ff",
                    "#a3a7f8",
                  ],
                  borderWidth: 0,
                  hoverOffset: 6,
                },
              ],
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              cutout: "70%",
              plugins: {
                legend: {
                  position: "right",
                  labels: {
                    usePointStyle: true,
                    padding: 20,
                    font: {
                      family: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                      size: 13,
                    },
                  },
                },
              },
            },
          });
        }
      });
