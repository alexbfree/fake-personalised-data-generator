<link rel="stylesheet" href="main.css"> 
### Getting To Know You
<div>Here's what you've entered so far about your life - use the buttons below to add more.</div>
<div id="user-info">
<div id="people-column" class="info-column"><h4>People</h4><ul></ul><button id="add-person" class="add-button" data-modal="person-modal">Add Person</button>
</div>
<div id="yourself-home-column" class="info-column"><h4>Yourself & Your Home</h4><ul></ul><button id="add-self" class="add-button" data-modal="self-modal">Add Details</button>
</div>
<div id="where-go-column" class="info-column"><h4>Where you spend time / money</h4><ul></ul><button id="add-spend" class="add-button" data-modal="spend-modal">Add somewhere</button>
</div>
<div id="places-column" class="info-column"><h4>Places in your life</h4><ul></ul><button id="add-place" class="add-button" data-modal="places-modal">Add Place</button>
</div>
<div id="causes-column" class="info-column"><h4>Your brands & causes</h4><ul></ul><button id="add-causes-channel" class="add-button" data-modal="causes-channel-modal">Add a TV Channel/Platform</button></div>
</div>
<div id="person-modal" class="modal">
  <div class="modal-content">
    <span class="close" data-modal="person-modal">&times;</span>
    <div class="modal-body">
      <h4>Add a person in your life</h4>
      <p>
      <label for="person-name">Name: </label>
      <input name="person-name" type="text" placeholder="e.g. Juliette Denham" value=""/>
      </p>
      <p>
      <label for="person-relationship">Relationship: </label>
      <input required list="relationship-options" name="person-relationship" placeholder="Enter relationship or click to select from list..." style="width:22em;">
      <datalist id="relationship-options">
          <option data-type="professional" value="Accountant">Accountant</option>
          <option data-type="romantic" value="Admirer">Admirer</option>
          <option data-type="professional" value="Advisee">Advisee</option>
          <option data-type="professional" value="Advisor">Advisor</option>
          <option data-type="professional" value="Agent">Agent</option>
          <option data-type="professional" value="Assistant">Assistant / PA</option>
          <option data-type="family" data-gender="female" value="Aunt">Aunt</option>
          <option data-type="professional" value="boss">Boss</option>
          <option data-type="romantic" data-gender="male" value="Boyfriend">Boyfriend</option>
          <option data-type="family" data-gender="male" value="Brother">Brother</option>
          <option data-type="family" data-gender="male" value="Brother-in-law">Brother-in-law</option>
          <option data-type="family" value="Child">Child</option>
          <option data-type="professional" value="Client">Client</option>
          <option data-type="professional" value="Clergyman">Clergyman/Clergywoman</option>
          <option data-type="social" value="Close friend">Close friend</option>
          <option data-type="professional" value="Contractor">Contractor</option>
          <option data-type="family" value="Cousin">Cousin</option>
          <option data-type="social" value="Crush">Crush</option>
          <option data-type="professional" value="Co-worker/Colleague">Co-worker/Colleague</option>
          <option data-type="professional" value="Customer">Customer</option>
          <option data-type="romantic" value="Date">Date</option>
          <option data-type="professional" value="Doctor">Doctor</option>
          <option data-type="family" data-gender="female" value="Daughter">Daughter</option>
          <option data-type="professional" value="Driver">Driver</option>
          <option data-type="professional" value="Electrician">Electrician</option>
          <option data-type="professional" value="Employee">Employee</option>
          <option data-type="professional" value="Employer">Employer</option>
          <option data-type="social" value="enemy">Enemy</option>
          <option data-type="romantic" value="ex">Ex</option>
          <option data-type="social" value="Facebook friend / online friend">Facebook friend / online friend</option>
          <option data-type="romantic" value="Friend with benefits">Friend with benefits</option>
          <option data-type="family" value="Family member">Family member</option>
          <option data-type="family" value="Family friend">Family friend</option>
          <option data-type="family" data-gender="male" value="Father">Father</option>
          <option data-type="family" data-gender="male" value="Father-in-law">Father-in-law</option>
          <option data-type="social" value="Friend">Friend</option>
          <option data-type="romantic" data-gender="female" value="Girlfriend">Girlfriend</option>
          <option data-type="family" value="Grandchild">Grandchild</option>
          <option data-type="family" value="Grandparent">Grandparent</option>
          <option data-type="family" data-gender="female" value="Great-aunt">Great-aunt</option>
          <option data-type="family" data-gender="male" value="Great-grandfather">Great-grandfather</option>
          <option data-type="family" data-gender="female" value="Great-grandmother">Great-grandfather</option>
          <option data-type="family" value="great-grandchild">Great-grandchild</option>
          <option data-type="family" data-gender="male" value="Great-uncle">Great-uncle</option>
          <option data-type="family" data-gender="male" value="Grandfather">Grandfather</option>
          <option data-type="family" data-gender="female" value="Grandmother">Grandmother</option>
          <option data-type="family" data-gender="male" value="Half-brother">Half-Brother</option>
          <option data-type="family" data-gender="female" value="Half-brother">Half-Sister</option>
          <option data-type="professional" data-gender="male" value="Handyman">Handyman</option>
          <option data-type="professional" data-gender="female" value="Handywoman">Handywoman</option>
          <option data-type="romantic" data-gender="male" value="Husband">Husband</option>
          <option data-type="family" value="In-law relative">In-law relative</option>
          <option data-type="romantic" value="Involved">Involved / Entwined</option>
          <option data-type="romantic" value="It's complicated">It's complicated</option>
          <option data-type="professional" value="Lawyer">Lawyer</option>
          <option data-type="professional" value="Lecturer">Lecturer</option>
          <option data-type="romantic" value="Lover">Lover</option>
          <option data-type="family" data-gender="female" value="Mother">Mother</option>
          <option data-type="family" data-gender="female" value="Mother-in-law">Mother-in-law</option>
          <option data-type="professional" value="Mentee">Mentee</option>
          <option data-type="professional" value="Mentor">Mentor</option>
          <option data-type="family" data-gender="male" value="Nephew">Nephew</option>
          <option data-type="family" data-gender="female" value="Niece">Niece</option>
          <option data-type="professional" value="Plumber">Plumber</option>
          <option data-type="family" value="Parent">Parent</option>
          <option data-type="professional" value="Patient">Patient</option>
          <option data-type="professional" value="Professor">Professor</option>
          <option data-type="romantic" value="Partner">Partner</option>
          <option data-type="family" value="Relative">Relative</option>
          <option data-type="professional" value="Representative">Representative</option>
          <option data-type="family" value="Sibling">Sibling</option>
          <option data-type="family" data-gender="female" value="Sister">Sister</option>
          <option data-type="family" data-gender="female" value="Sister-in-law">Sister-in-law</option>
          <option data-type="romantic" value="Spouse">Spouse</option>    
          <option data-type="social" value="Support buddy">Support buddy</option>    
          <option data-type="family" data-gender="male" value="Son">Son</option>
          <option data-type="family" data-gender="male" value="Stepbrother">Stepbrother</option>
          <option data-type="family" data-gender="female" value="Stepdaughter">Stepdaughter</option>
          <option data-type="family" data-gender="male" value="Stepfather">Stepfather</option>
          <option data-type="family" data-gender="female" value="Stepmother">Stepmother</option>
          <option data-type="family" data-gender="female" value="Stepsister">Stepsister</option>
          <option data-type="family" data-gender="male" value="Stepson">Stepson</option>
          <option data-type="professional" value="Student">Student</option>
          <option data-type="professional" value="Supervisee">Supervisee</option>
          <option data-type="professional" value="Supervisor">Supervisor</option>
          <option data-type="professional" value="Teacher">Teacher</option>
          <option data-type="professional" value="Team leader">Team leader</option>
          <option data-type="family" data-gender="male" value="Uncle">Uncle</option>
          <option data-type="romantic" value="Unwanted admirer">Unwanted admirer</option>
          <option data-type="romantic" data-gender="female" value="Wife">Wife</option> 
      </datalist>
      </p>
      <p>
      <label for="person-gender">Gender: </label>
      <select required name="person-gender" required>
          <option value="" disabled selected hidden>Select gender...</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="non-binary-other">Non-binary, unspecified or other</option>
      </select>
      </p>
      <p>
      <label for="person-active">Active?</label>
      <select required name="person-active" required>
          <option value="" disabled selected hidden>Select if relationship is active...</option>
          <option value="past">Past relationship (e.g. estranged, ex, divorced, deceased, missing)</option>
          <option selected value="active">Current relationship</option>
      </select>
      </p>
      <button data-modal="person-modal" id="submit-person">Add</button>                
    </div>
  </div>
</div>
<div id="self-modal" class="modal">
  <div class="modal-content">
    <span class="close" data-modal="self-modal">&times;</span>
    <div class="modal-body">
      <p>Yourself and Your Home</p>
    </div>
  </div>
</div>
<div id="places-modal" class="modal">
  <div class="modal-content">
    <span class="close" data-modal="places-modal">&times;</span>
    <div class="modal-body">
      <p>Places</p>
    </div>
  </div>
</div>
<div id="causes-channel-modal" class="causes-modal modal">
  <div class="modal-content">
    <span class="close" data-modal="causes-modal">&times;</span>
    <div class="modal-body">
      <h4>Add a channel you watch:</h4>
      <label for="causes-channel-name">Add a channels or TV service you use: </label>
      <input required list="causes-channel-options" name="causes-channel" type="text" placeholder="Enter channel or click to select from list..." value=""/>
      <datalist id="causes-channel-options">
            <option value="All 4">All 4</option>
            <option value="Amazon Prime Video">Amazon Prime Video</option>
            <option value="Apple TV">Apple TV</option>
            <option value="Arrow Video">Arrow Video</option>
            <option value="BBC iPlayer">BBC iPlayer</option>
            <option value="BBC iPlayer Kids">BBC iPlayer Kids</option>
            <option value="BFI Player">BFI Player</option>
            <option value="BritBox">BritBox</option>
            <option value="BT TV">BT TV</option>
            <option value="Crunchyroll">Crunchyroll</option>
            <option value="Curzon Home Cinema">Curzon Home Cinema</option>
            <option value="Disney+">Disney+</option>
            <option value="Freesat">Freesat</option>
            <option value="Freeview">Freeview</option>
            <option value="Google Play Movies">Google Play Movies</option>
            <option value="hayu">HayU</option>
            <option value="ITV Hub">ITV Hub</option>
            <option value="MUBI">MUBI</option>
            <option value="My5">My5</option>
            <option value="Netflix">Netflix</option>
            <option value="NOW TV">NOW TV</option>
            <option value="Plusnet TV">Plusnet TV</option>
            <option value="Pokemon TV">Pokemon TV</option>
            <option value="S4C Clic">S4C Clic</option>
            <option value="Shudder">Shudder</option>
            <option value="Sky Go">Sky Go (Sky TV)</option>
            <option value="STV Player">STV Player</option>
            <option value="TalkTalk TV">TalkTalk TV</option>
            <option value="TV Player">TV Player</option>
            <option value="UKTV Play">UKTV Play</option>
            <option value="Virgin Media">Virgin Media</option>
            <option value="YouTube">YouTube</option>
            <option value="YouTube Kids">YouTube Kids</option>
            <option value="YouTube Movies">YouTube Movies</option>
            <option value="YouView">YouView</option>
      </datalist>
      <p>
        <button data-modal="causes-channel-modal" id="submit-causes-channel">Add</button>
      </p>    
    </div>
  </div>
</div>
<div id="spend-modal" class="modal">
  <div class="modal-content">
    <span class="close" data-modal="spend-modal">&times;</span>
    <div class="modal-body">
      <p>Where you Spend Time and Money</p>
    </div>
  </div>
</div>


<hr/>

### Some Sample Data
<button id='generate'>Generate Sample Data</button>

<div class="widget">
  <ul class="widget-list" id="activities">
    <li>
      <a class="widget-list-link">
        <img src="http://www.gravatar.com/avatar/47?f=y&amp;s=64&amp;d=identicon">
        Activity #1 <span>detailgoeshere</span>
      </a>
    </li>
    <li>
      <a class="widget-list-link">
        <img src="http://www.gravatar.com/avatar/47?f=y&amp;s=64&amp;d=identicon">
        Activity #2 <span>detailgoeshere</span>
      </a>
    </li>
    <li>
      <a class="widget-list-link">
        <img src="http://www.gravatar.com/avatar/47?f=y&amp;s=64&amp;d=identicon">
        Activity #3 <span>detailgoeshere</span>
      </a>
    </li>
  </ul>

  <ul class="widget-list" id="interactions">
    <li>
      <a class="widget-list-link">
        <img src="http://www.gravatar.com/avatar/5?f=y&amp;s=64&amp;d=identicon">
        Interaction #1 <span>detailgoeshere</span>
      </a>
    </li>
    <li>
      <a class="widget-list-link">
        <img src="http://www.gravatar.com/avatar/5?f=y&amp;s=64&amp;d=identicon">
        Interaction #2 <span>detailgoeshere</span>
      </a>
    </li>
    <li>
      <a class="widget-list-link">
        <img src="http://www.gravatar.com/avatar/5?f=y&amp;s=64&amp;d=identicon">
        Interaction #3 <span>detailgoeshere</span>
      </a>
    </li>
  </ul>

  <ul class="widget-list" id="transactions">
    <li>
      <a class="widget-list-link">
        <img src="http://www.gravatar.com/avatar/6?f=y&amp;s=64&amp;d=identicon">
        Transaction #1 <span>detailgoeshere</span>
      </a>
    </li>
    <li>
      <a class="widget-list-link">
        <img src="http://www.gravatar.com/avatar/6?f=y&amp;s=64&amp;d=identicon">
        Transaction #2 <span>detailgoeshere</span>
      </a>
    </li>
    <li>
      <a class="widget-list-link">
        <img src="http://www.gravatar.com/avatar/6?f=y&amp;s=64&amp;d=identicon">
        Transaction #3 <span>detailgoeshere</span>
      </a>
    </li>
  </ul>

  <ul class="widget-list" id="datasets">
    <li>
      <a class="widget-list-link">
        <img src="http://www.gravatar.com/avatar/6?f=y&amp;s=64&amp;d=identicon">
        Dataset #1 <span>detailgoeshere</span>
      </a>
    </li>
    <li>
      <a class="widget-list-link">
        <img src="http://www.gravatar.com/avatar/6?f=y&amp;s=64&amp;d=identicon">
        Dataset #2 <span>detailgoeshere</span>
      </a>
    </li>
    <li>
      <a class="widget-list-link">
        <img src="http://www.gravatar.com/avatar/6?f=y&amp;s=64&amp;d=identicon">
        Dataset #3 <span>detailgoeshere</span>
      </a>
    </li>
  </ul>

  <ul class="widget-tabs">
    <li class="widget-tab">
      <a href="#datasets" id="datasets" class="widget-tab-link">Datasets</a>
    </li>
    <li class="widget-tab">
      <a href="#transactions" id="transactions" class="widget-tab-link">Transactions</a>
    </li>
    <li class="widget-tab">
      <a href="#interactions" id="interactions" class="widget-tab-link">Interactions</a>
    </li>
    <li class="widget-tab activated">
      <a href="#activities" id="activities" class="widget-tab-link">Activities</a>
    </li>
  </ul>
</div>

<hr/>

<script type="text/javascript" src="main.js"></script>



<div id="sample-data-outer-container">


</div>
