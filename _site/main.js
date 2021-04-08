let get_people = function () {
    let storedPeople = localStorage.getItem('people');
    let people = [];
    if (storedPeople) {
        people = JSON.parse(storedPeople);
        people.sort(compare_people);
    } else {
        localStorage.setItem('people', JSON.stringify([]));
    }
    return people;
}

let get_causes_channels = function () {
    let stored_channels = localStorage.getItem('channels');
    let channels = [];
    if (stored_channels) {
        channels = JSON.parse(stored_channels);
        channels.sort(compare_any_string);
    } else {
        localStorage.setItem('channels', JSON.stringify([]));
    }
    return channels;
}

let store_new_person = function (name, relationship, relationship_type, gender, active) {
    let people = get_people();
    let person = {
        name: name,
        relationship_type: relationship_type,
        relationship: relationship,
        gender: gender,
        active: active
    };
    people.push(person);
    localStorage.setItem('people', JSON.stringify(people));
    return true;
}

let store_new_causes_channel = function (channel) {
    let channels = get_causes_channels();
    channels.push(channel);
    localStorage.setItem('channels', JSON.stringify(channels));
    return true;
}

let bind_delete_person_buttons = function () {
    let delete_person_buttons = document.querySelectorAll('button.delete-person');
    [].forEach.call(delete_person_buttons, function (delete_person_button) {
        delete_person_button.onclick = function (e) {
            let name_to_delete = e.target.dataset.name;
            delete_person(name_to_delete);
            update_people_display();
        };
    });
}

let bind_add_causes_channel_button = function () {
    let add_causes_channel_button = document.querySelector('button#add-causes-channel');
    add_causes_channel_button.onclick = function (e) {
        let modal = document.getElementById(e.target.dataset.modal);
        modal.style.display = "block";
    };
}

let bind_delete_causes_channel_buttons = function () {
    let delete_causes_channel_buttons = document.querySelectorAll('button.delete-causes-channel');
    [].forEach.call(delete_causes_channel_buttons, function (delete_causes_channel_button) {
        delete_causes_channel_button.onclick = function (e) {
            let channel_to_delete = e.target.dataset.causesChannel;
            console.log(channel_to_delete);
            delete_causes_channel(channel_to_delete);
            update_causes_display();
        };
    });
}

let delete_person = function (name) {
    let people = get_people();
    let initial_length = people.length;
    let trimmed_people = [];
    for (let person of people) {
        if (person.name != name) {
            trimmed_people.push(person);
        }
    }
    localStorage.setItem('people', JSON.stringify(trimmed_people));
    return trimmed_people.length < initial_length;
}

let delete_causes_channel = function (channel) {
    let channels = get_causes_channels();
    let initial_length = channels.length;
    let trimmed_channels = [];
    for (let c of channels) {
        if (c != channel) {
            trimmed_channels.push(c);
        }
    }
    localStorage.setItem('channels', JSON.stringify(trimmed_channels));
    return trimmed_channels.length < initial_length;
}

/*let edit_person = function(oldName,newName,relationship,relationship_type,gender,active) {
    let deleted = delete_person(oldName);
    if (deleted) {
        let stored = store_new_person(newName, relationship, relationship_type, gender, active);
        return stored;
    } else {
        return false;
    }
}*/

let get_display_relationship = function (active, relationship) {
    let return_string = ""
    return_string += relationship.replace(/-/g, ' ');
    if (active == "past") {
        return_string += " (past)";
    }
    return return_string;
}

let update_people_display = function () {
    let people = get_people();
    if (people.length>0) {
        let list = document.querySelector("#people-column ul");
        list.innerHTML = "";
        for (let p of people) {
            list.insertAdjacentHTML("afterbegin", `<li>${p.name} (${get_display_relationship(p.active, p.relationship)}) <button data-name="${p.name}" class="delete-person">Delete</button></li>`);
        }
        bind_delete_person_buttons();
    }
}

let update_causes_display = function () {
    let col = document.querySelector("#causes-column");
    col.innerHTML = "<h4>Your brands & causes</h4><ul></ul><button id=\"add-causes-channel\" class=\"add-button\" data-modal=\"causes-channel-modal\">Add a TV Channel/Platform</button>";
    bind_add_causes_channel_button();
    let channels = get_causes_channels();
    if (channels.length>0) {
        let list = document.querySelector("#causes-column ul");
        list.insertAdjacentHTML("beforebegin", "<h5>Channels</h5>");
        for (let c of channels) {
            list.insertAdjacentHTML("afterbegin", `<li>${c} <button data-causes-channel="${c}" class="delete-causes-channel">Delete</button></li>`);
        }
        bind_delete_causes_channel_buttons();
    }
}

let compare_people = function (a, b) {
    if (a.name > b.name) {
        return -1;
    }
    if (a.name < b.name) {
        return 1;
    }
    return 0;
}

let compare_any_string = function (a, b) {
    if (a > b) {
        return -1;
    }
    if (a < b) {
        return 1;
    }
    return 0;
}

let generate_sample_occurrences = function() {

}


window.addEventListener('load', function () {
    let add_buttons = document.querySelectorAll(".add-button");
    let close_spans = document.getElementsByClassName("close");
    let modals = document.getElementsByClassName("modal");
    let tab_links = document.querySelectorAll('.widget-tab-link');

    [].forEach.call(tab_links, function (tab_link) {
        tab_link.onclick = function (e) {
            [].forEach.call(tab_links, function (tab_link) {
                tab_link.parentNode.classList.remove('activated');
            });
            e.target.parentNode.classList.add('activated');
            //console.log(window.location.hash);
            e.preventDefault();
            window.location.hash=`#${e.target.id}`;
        }
    });

    [].forEach.call(add_buttons, function (button) {
        button.onclick = function (e) {
            let modal = document.getElementById(e.target.dataset.modal);
            modal.style.display = "block";
        }
    });

    [].forEach.call(close_spans, function (span) {
        span.onclick = function (e) {
            let modal = document.getElementById(e.target.dataset.modal);
            modal.style.display = "none";
        }
    });

    let close_all_modals = function () {
        [].forEach.call(modals, function (modal) {
            modal.style.display = "none";
        });
    }

    window.onclick = function (event) {
        if (event.target.id.indexOf('modal') > -1) {
            close_all_modals();
        }
    }

    let relationship_select = document.querySelector('input[name="person-relationship"]');
    relationship_select.oninput = function (e) {
        let list_entry = document.querySelector(`datalist#relationship-options option[value="${e.target.value}"]`);
        if (list_entry) {
            document.querySelector('select[name="person-gender"]').value = list_entry.dataset.gender;
        } else {
            document.querySelector('select[name="person-gender"]').value = "";
        }
    };

    let submit_person_button = document.querySelector('#submit-person');
    submit_person_button.onclick = function (e) {
        let name = document.querySelector('input[name="person-name"]').value;
        let relationship_select = document.querySelector('input[name="person-relationship"]');
        let relationship = relationship_select.value;
        let relationship_selected_option = document.querySelector(`datalist#relationship-options option[value="${relationship}"]`);
        let relationship_type = "other";
        if (relationship_selected_option) {
            relationship_type = relationship_selected_option.dataset.type;
        }
        let gender = document.querySelector('select[name="person-gender"]').value;
        let active = document.querySelector('select[name="person-active"]').value;
        store_new_person(name, relationship, relationship_type, gender, active);
        close_all_modals();
        update_people_display();
    }

    let submit_causes_channel_button = document.querySelector('#submit-causes-channel');
    submit_causes_channel_button.onclick = function (e) {
        let channel_selected_text = document.querySelector(`input[name="causes-channel"]`).value;
        if (channel_selected_text) {
            store_new_causes_channel(channel_selected_text);
            close_all_modals();
            update_causes_display();
        }
    }

    update_people_display();
    update_causes_display();
});