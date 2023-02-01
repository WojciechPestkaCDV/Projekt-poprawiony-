//Funkcja wyświetlająca popup z informacją o polityce prywatności
function showPrivacyPolicyPopup() {
    //Tworzenie elementów HTML dla popupu
    var popup = document.createElement("div");
    var message = document.createElement("p");
    var link = document.createElement("a");
    // var br = document.createElement("<br>");
    var button = document.createElement("button");
  
    //Dodawanie treści dla elementów
    message.innerHTML = "Aby korzystać z naszej aplikacji, musisz zaakceptować naszą Politykę Prywatności.";
    link.innerHTML = "Zobacz Politykę Prywatności<br><br>";
    link.href = "pilitykaprywatności.txt";
    link.target = "_blank";
    button.innerHTML = "Akceptuję";
    // button.setAttribute("id", "accept-button");
    button.setAttribute("onclick", "showContent()");
    // document.body.appendChild(button);
    document.getElementById("content").style.display = "none";

    
  
    //Dodawanie elementów do popupu
    popup.appendChild(message);
    popup.appendChild(link);
    popup.appendChild(button);
  
    //Dodawanie styli dla popupu
    popup.style.backgroundColor = "rgba(0,0,0,0.8)";
    popup.style.color = "white";
    popup.style.padding = "20px";
    popup.style.width = "50%";
    popup.style.margin = "0 auto";
    popup.style.textAlign = "center";
    

    //Dodawanie funkcji dla przycisku "Akceptuję"
    button.addEventListener("click", function() {
        //Ustawienie ciasteczka lub innego sposobu zapamiętania zaakceptowania polityki prywatności przez użytkownika
        localStorage.setItem("privacyPolicyAccepted", true);
        //Usunięcie popupu z ekranu
        popup.remove();
        //Włączenie aplikacji
        document.getElementById("content").style.display = "block";
        enableApp();
        
    });
  
    //Dodanie popupu do strony
    document.body.appendChild(popup);
}

//Funkcja sprawdzająca, czy użytkownik zaakceptował politykę prywatności
function checkPrivacyPolicyAccepted() {
    //Sprawdzenie ciasteczka lub innego sposobu zapamiętania zaakceptowania polityki prywatności przez użytkownika
    var privacyPolicyAccepted = localStorage.getItem("privacyPolicyAccepted");
    if (!privacyPolicyAccepted) {
        //Jeśli użytkownik nie zaakceptował polityki prywatności, wyświetlenie popupu i zablokowanie dostępu do strony
        showPrivacyPolicyPopup();
        document.body.style.pointerEvents = "none";
        
    } else {
        //Jeśli użytkownik zaakceptował politykę prywatności, włączenie aplikacji
        enableApp();
        document.getElementById("content").style.display = "block";
    }
}


console.log("chwerj")
