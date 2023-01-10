const colorSwitch = document.querySelector('#switch input[type="checkbox"]');
            function cambiaTema(ev){
                console.log("funcion");
                if(ev.target.checked){
                    document.documentElement.setAttribute('tema', 'light');
                    console.log("if");
                } else {
                    document.documentElement.setAttribute('tema', 'dark');
                    console.log("else");
                }
            }
            colorSwitch.addEventListener('change', cambiaTema);
