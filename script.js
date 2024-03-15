let donatedAmount = 0; 
        const totalGoal = 50000; 

        function showPaymentOptions() {
            const paymentOptions = document.getElementById("paymentOptions");
            paymentOptions.style.display = "block"; 
            document.getElementById("paymentTitle").style.display = "block"; 
            document.querySelector(".donate-button").style.display = "none"; 
        }

        function showDonationInput(paymentMethod) {
            const donationInput = document.getElementById("donationAmount");
            donationInput.style.display = "block"; 
            donationInput.placeholder = `Valor ${paymentMethod}`;
            document.getElementById("donateButton").style.display = "block"; 
        }

        function donate() {
            const donationInput = document.getElementById("donationAmount");
            const amount = parseFloat(donationInput.value);
            if (!isNaN(amount) && amount > 0) {
                if (donatedAmount < totalGoal) {
                    donatedAmount += amount;
                    const progressFill = document.getElementById("progressFill");
                    const progressPercentage = Math.min((donatedAmount / totalGoal) * 100, 100); 
                    progressFill.style.width = progressPercentage + "%";
                    document.getElementById("amountDonated").textContent = `Arrecadado até agora: R$ ${donatedAmount.toFixed(2).replace('.', ',')}`;
                    donationInput.value = ""; 
                    checkGoalReached();
                } else {
                    alert("A meta já foi alcançada!");
                }
            }
        }

        function checkGoalReached() {
            if (donatedAmount >= totalGoal) {
                document.getElementById("goalReachedMessage").style.display = "block";
               
            }
        }