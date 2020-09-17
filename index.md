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
<div id="brands-causes-column" class="info-column"><h4>Your brands & causes</h4><ul></ul><button id="add-causes" class="add-button" data-modal="causes-modal">Add Brand/Cause</button></div>
</div>
<div id="person-modal" class="modal">
  <div class="modal-content">
    <span class="close" data-modal="person-modal">&times;</span>
    <div class="modal-body">
      <h4>Add a person in your life</h4>
      <label for="person-name">Name: </label>
      <input name="person-name" type="text" placeholder="e.g. Juliette Denham" value=""/>
      <select required name="person-relationship" required>
          <option value="" disabled selected hidden>Select relation to you...</option>
          <option data-type="professional" value="accountant">Accountant</option>
          <option data-type="romantic" value="admirer">Admirer</option>
          <option data-type="professional" value="advisee">Advisee</option>
          <option data-type="professional" value="advisor">Advisor</option>
          <option data-type="professional" value="agent">Agent</option>
          <option data-type="professional" value="assistant">Assistant / PA</option>
          <option data-type="family" data-gender="female" value="aunt">Aunt</option>
          <option data-type="professional" value="boss">Boss</option>
          <option data-type="romantic" data-gender="male" value="boyfriend">Boyfriend</option>
          <option data-type="family" data-gender="male" value="brother">Brother</option>
          <option data-type="family" value="child">Child</option>
          <option data-type="professional" value="client">Client</option>
          <option data-type="professional" value="clergyman">Clergyman/Clergywoman</option>
          <option data-type="social" value="close-friend">Close Friend</option>
          <option data-type="professional" value="contractor">Contractor</option>
          <option data-type="family" value="cousin">Cousin</option>
          <option data-type="social" value="crush">Crush</option>
          <option data-type="professional" value="coworker">Co-worker/Colleague</option>
          <option data-type="professional" value="customer">Customer</option>
          <option data-type="professional" value="doctor">Doctor</option>
          <option data-type="family" data-gender="female" value="daughter">Daughter</option>
          <option data-type="professional" value="driver">Driver</option>
          <option data-type="professional" value="electrician">Electrician</option>
          <option data-type="professional" value="employee">Employee</option>
          <option data-type="professional" value="employer">Employer</option>
          <option data-type="social" value="enemy">Enemy</option>
          <option data-type="romantic" value="ex">Ex</option>
          <option data-type="social" value="facebook-friend">Facebook friend / online friend</option>
          <option data-type="family" value="family-member">Family member</option>
          <option data-type="family" value="family-friend">Family friend</option>
          <option data-type="family" data-gender="male" value="father">Father</option>
          <option data-type="social" value="friend">Friend</option>
          <option data-type="romantic" data-gender="female" value="girlfriend">Girlfriend</option>
          <option data-type="family" value="grandchild">Grandchild</option>
          <option data-type="family" value="grandparent">Grandparent</option>
          <option data-type="family" data-gender="female" value="great-aunt">Great-aunt</option>
          <option data-type="family" data-gender="male" value="great-grandfather">Great-grandfather</option>
          <option data-type="family" data-gender="female" value="great-grandmother">Great-grandfather</option>
          <option data-type="family" value="great-grandchild">Great-grandchild</option>
          <option data-type="family" data-gender="male" value="great-uncle">Great-uncle</option>
          <option data-type="family" data-gender="male" value="grandfather">Grandfather</option>
          <option data-type="family" data-gender="female" value="grandmother">Grandmother</option>
          <option data-type="family" data-gender="male" value="half-brother">Half-Brother</option>
          <option data-type="family" data-gender="female" value="half-brother">Half-Sister</option>
          <option data-type="professional" value="handyman">Handyman / Handywoman</option>
          <option data-type="romantic" data-gender="male" value="husband">Husband</option>
          <option data-type="romantic" value="involved">Involved / Entwined</option>
          <option data-type="romantic" value="is-complicated">It's complicated</option>
          <option data-type="professional" value="lawyer">Lawyer</option>
          <option data-type="professional" value="lecturer">Lecturer</option>
          <option data-type="romantic" value="lover">Lover</option>
          <option data-type="family" data-gender="female" value="mother">Mother</option>
          <option data-type="professional" value="mentee">Mentee</option>
          <option data-type="professional" value="mentor">Mentor</option>
          <option data-type="family" data-gender="male" value="nephew">Nephew</option>
          <option data-type="family" data-gender="female" value="niece">Niece</option>
          <option data-type="unknown" value="other">Other</option>
          <option data-type="professional" value="Plumber">Plumber</option>
          <option data-type="family" value="parent">Parent</option>
          <option data-type="professional" value="parent">Patient</option>
          <option data-type="professional" value="professor">Professor</option>
          <option data-type="romantic" value="partner">Partner</option>
          <option data-type="family" value="relative">Relative</option>
          <option data-type="professional" value="representative">Representative</option>
          <option data-type="family" value="sibling">Sibling</option>
          <option data-type="family" data-gender="female" value="sister">Sister</option>
          <option data-type="romantic" value="spouse">Spouse</option>    
          <option data-type="social" value="support-buddy">Support Buddy</option>    
          <option data-type="family" data-gender="male" value="son">Son</option>
          <option data-type="family" data-gender="male" value="stepsister">Stepbrother</option>
          <option data-type="family" data-gender="male" value="stepfather">Stepfather</option>
          <option data-type="family" data-gender="female" value="stepmother">Stepmother</option>
          <option data-type="family" data-gender="female" value="stepsister">Stepsister</option>
          <option data-type="professional" value="student">Student</option>
          <option data-type="professional" value="supervisee">Supervisee</option>
          <option data-type="professional" value="supervisor">Supervisor</option>
          <option data-type="professional" value="teacher">Teacher</option>
          <option data-type="professional" value="team-leader">Team leader</option>
          <option data-type="family" data-gender="male" value="uncle">Uncle</option>
          <option data-type="romantic" value="unwanted-admirer">Unwanted Admirer</option>
          <option data-type="romantic" data-gender="female" value="wife">Wife</option> 
      </select>
      <select required name="person-gender" required>
          <option value="" disabled selected hidden>Select gender...</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="non-binary-other">Non-binary, unspecified or other</option>
      </select>
      <select required name="person-active" required>
          <option value="" disabled selected hidden>Select if relationship is active...</option>
          <option value="past">Past relationship (e.g. estranged, ex, divorced, deceased, missing)</option>
          <option selected value="active">Current relationship</option>
      </select>
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
<div id="causes-modal" class="modal">
  <div class="modal-content">
    <span class="close" data-modal="causes-modal">&times;</span>
    <div class="modal-body">
      <p>Brands and Causes</p>
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

### Some Sample Data
<button id='generate'>Generate Sample Data</button>
<script type="text/javascript" src="main.js"></script>
