

let get_people = function() {
    let storedPeople = localStorage.getItem('people');
    let people = [];
    if (storedPeople) {
        people = JSON.parse(storedPeople);
        people.sort( compare_people );
    } else {
        localStorage.setItem('people',JSON.stringify([]));
    }
    return people;
}

let store_new_person = function(name,relationship,relationship_type,gender,active) {
    let people = get_people();
    let person = {
        name: name,
        relationship_type: relationship_type,
        relationship: relationship,
        gender: gender,
        active: active
    };
    people.push(person);
    localStorage.setItem('people',JSON.stringify(people));
    return true;
}

let bind_delete_person_buttons = function() {
    let delete_person_buttons = document.querySelectorAll('button.delete-person');
    [].forEach.call(delete_person_buttons, function(delete_person_button) {
        delete_person_button.onclick = function (e) {
            let name_to_delete = e.target.dataset.name;
            delete_person(name_to_delete);
            update_people_display();
        };
    });
}

let delete_person = function(name) {
    let people = get_people();
    let initial_length = people.length;
    let trimmed_people = [];
    for (let person of people) {
        if (person.name!=name) {
            trimmed_people.push(person);
        }
    }
    localStorage.setItem('people',JSON.stringify(trimmed_people));
    return trimmed_people.length<initial_length;
}

let edit_person = function(oldName,newName,relationship,relationship_type,gender,active) {
    let deleted = delete_person(oldName);
    if (deleted) {
        let stored = store_new_person(newName, relationship, relationship_type, gender, active);
        return stored;
    } else {
        return false;
    }
}

let get_display_relationship = function(active,relationship) {
    let return_string = ""
    return_string += relationship.replace(/-/g, ' ');
    if (active=="past") {
        return_string += " (past)";
    }
    return return_string;
}

let update_people_display = function() {
    let people = get_people();
    let list = document.querySelector("#people-column ul");
    list.innerHTML="";
    for (let p of people) {
        list.insertAdjacentHTML("afterbegin", `<li>${p.name} (${get_display_relationship(p.active,p.relationship)}) <button data-name="${p.name}" class="delete-person">Delete</button></li>`);
    }
    bind_delete_person_buttons();
}


let compare_people = function( a, b ) {
    if ( a.name > b.name ){
        return -1;
    }
    if ( a.name < b.name ){
        return 1;
    }
    return 0;
}

window.addEventListener('load', function () {
    let add_buttons = document.querySelectorAll(".add-button");
    let close_spans = document.getElementsByClassName("close");
    let modals = document.getElementsByClassName("modal");

    [].forEach.call(add_buttons, function(button) {
        button.onclick = function(e) {
            let modal = document.getElementById(e.target.dataset.modal);
            modal.style.display = "block";
        }
    });

    [].forEach.call(close_spans, function(span) {
            span.onclick = function(e) {
                let modal = document.getElementById(e.target.dataset.modal);
                modal.style.display = "none";
            }
    });

    let close_all_modals = function() {
        [].forEach.call(modals, function(modal) {
            modal.style.display = "none";
        });
    }

    window.onclick = function(event) {
        if (event.target.id.indexOf('modal')>-1) {
            close_all_modals();
        }
    }

    let relationship_select = document.querySelector('select[name="person-relationship"]');
    relationship_select.onchange = function(e) {
        let gender = this.querySelector(':checked').getAttribute('data-gender');
        if (gender) {
            document.querySelector('select[name="person-gender"]').value=gender;
        } else {
            document.querySelector('select[name="person-gender"]').value="";
        }
    };

    let submit_person_button = document.querySelector('#submit-person');
    submit_person_button.onclick = function(e) {
        let name = document.querySelector('input[name="person-name"]').value;
        let relationship_select = document.querySelector('select[name="person-relationship"]');
        let relationship = relationship_select.value;
        let relationship_selected_option = document.querySelector('select[name="person-relationship"] option:checked');
        let relationship_type = relationship_selected_option.dataset.type;
        let gender = document.querySelector('select[name="person-gender"]').value;
        let active = document.querySelector('select[name="person-active"]').value;
        store_new_person(name,relationship,relationship_type,gender,active);
        close_all_modals();
        update_people_display();
    }

    update_people_display();

});