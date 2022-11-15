
    const imgDiv = document.querySelector('.profile-pic-div');
    const img = document.querySelector('#photo');
    const file = document.querySelector('#file');
    const upload = document.querySelector('#uploadBtn');
    console.log(img)


    // if user hover on profile div
    img.addEventListener('mouseenter', function(){
        upload.style.display = "block";

    })
    // if we hover out from img div
    imgDiv.addEventListener('mouseleave',  function(){
        upload.style.display = "none";
    })

    // let work for image showing functionality when we choose an image to upload

    file.addEventListener('change', function(){
        console.log("what is the problem if this file of a thing =",file.value)
        // this refers to file
        let choosedFile =  this.file[0];
        console.log("This is the output for just file var",file[0])
        console.log("out put for the choosedfile", choosedFile)
        

        if(choosedFile){
            const reader= new FileReader();// FileReader is a predefined functionin  JS
            reader.addEventListener('load', function(){
                img.setAttribute('src', reader.result);
                reader.readAsDataURL(choosedFile);

                // let check on browser
            }) 
        }
    })
