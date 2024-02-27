(function(){
    "use strict";
    const detailsform = document.querySelector("#destination_details_form");
    detailsform.addEventListener("submit",handleformsubmit);
    function handleformsubmit(event){
        event.preventDefault();
        const destname = event.target.elements["name"].value;
        const destloc = event.target.elements["location"].value;
        const destphoto = event.target.elements["photo"].value;
        const destdesc = event.target.elements["description"].value;

        for(let i=0;i<detailsform.length;i++){
            detailsform.elements[i].value='';
        }

        const destcard= createDestinationCard(destname,destloc,destphoto,destdesc);
        
        const wishcontainer= document.getElementById('destination_container');
        if (wishcontainer.children.length===0){
            document.getElementById('title').innerHTML="My Wish List";
        }


        document.querySelector('#destination_container').appendChild(destcard);}



        function createDestinationCard(name,location,photourl,description)
            {
                const card =document.createElement('div');
                card.className="card";
                const img=document.createElement('img');
                img.setAttribute("alt",name);

                const constantphotourl="images/signpost.jpg";
                if(photourl.length===0){
                    img.setAttribute('src',constantphotourl);
                }
                else{
                    img.setAttribute('src',photourl);
                }

                card.appendChild(img)

                const cardbody=document.createElement('div');
                cardbody.className="card-body";

                const cardtitle = document.createElement('h3');
                cardtitle.innerText=name;
                cardbody.appendChild(cardtitle);

                const cardsubtitle = document.createElement('h4');
                cardsubtitle.innerText=location;
                cardbody.appendChild(cardsubtitle);

                if (description.length!==0){
                    const cardtext=document.createElement("p");
                    cardtext.className="card-text";
                    cardtext.innerText=description;
                    cardbody.appendChild(cardtext);
                }
                
                const carddeletebtn=document.createElement("button");
                carddeletebtn.innerText="Remove";
                carddeletebtn.addEventListener("click",removedestination);
                cardbody.appendChild(carddeletebtn);
                card.appendChild(cardbody)

                return card;

            }

            function removedestination(event){
                const card = event.target.parentElement.parentElement;
                card.remove();
            }
        
}());