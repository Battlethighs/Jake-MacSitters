# Mac-Sitters Styleguide

This is Mac-Sitters' living styleguide, generated from KSS documented styles.

##Installing:

		git clone ssh://git@???
		bundle install

##Running:

    bundle exec ruby app.rb

navigate to http://localhost:4567 in your browser

##Contributing:

	**Needs details

##Developing:

###Compile CSS one time:

	  sass --update styles:public/stylesheets --scss

###Compile SASS automatically on any .scss file changes:

	  sass --watch styles:public/stylesheets --scss

###Creating new pages:

add a new *.erb file to /views and add link to layout.erb nav. Each page has multiple sections.

###Creating new sections:

use the following template to add sections to a page:

		<section>
		  <div class="row">
		    <div class="col-lg-12">
		      <div class="col-lg-12">
		       <h2 class="section-head">Example Section</h2>
		         <!-- add styleguide blocks here -->
		      </div>
		    </div>
		  </div>
		</section>

Replace "Example Section" with your section's title. Sections are a way to separate groups
of styles based on application, version, or intent. For instance, there may be a section for
SharePlan, one for Console, one for Sites, and one called "Deprecated" for retired styles.

###Creating new sub-sections:
The sub-section numbers are used to group alternate stylings for a given component. These numbers
are also the way KSS parses the comments into groupings.  A comment for a given component may look
like the following:

		/*
		Super Spectacular Buttons.

		:hover    - Highlights when hovering.
		:disabled - Dims the button when disabled.
		.primary  - Indicates button is the primary action.
		.smaller  - A smaller button

		Styleguide 1.1
		*/

The first line is the description of the component. This description is displayed at the top of the subsection.
The second grouping of lines is for component modifiers. These are the classes and element states for the given
component and each state will be displayed automatically. The third line matches the comments up with a styleguide
block which looks like this:

    <% styleguide_block  '1.1' do %>
      <div class="$modifier_class styleguide-color">$modifier_description</div>
    <% end %>

Insert the styleguide block inside the appropriate section outlined above. Putting it all together, a section may
look like the following:

		<section>
		  <div class="row">
		    <div class="col-lg-12">
		      <div class="col-lg-12">
		       <h2 class="section-head">Example Section</h2>
			      <% styleguide_block  '1.1' do %>
			        <div class="$modifier_class styleguide-color">$modifier_description</div>
			      <% end %>
			      <% styleguide_block  '1.2' do %>
			        <div class="$modifier_class styleguide-color">$modifier_description</div>
			      <% end %>
			      <!-- ...and so on -->
		      </div>
		    </div>
		  </div>
		</section>



####Guidelines

Coding guidelines to follow. For now, loosely refer to github's guidelines: https://github.com/styleguide/css