// posts for case studies and about in html format

export const content = {
    "nomadtime-case-study": {
        "title": "NomadTime: Making the World Feel Closer",
        "imgSrc": "/nomadtime/icon.png",
        "post": `
    <p class="case-eyebrow">Independent product · Product design &amp; engineering · 2026</p>
    <p class="case-lead">A visual world clock for understanding what your life could look like somewhere else—and keeping a little of the world with you.</p>
    <ul class="case-facts">
      <li><strong>My role</strong>Founder, product direction, UX, architecture &amp; release engineering</li>
      <li><strong>Built with</strong>React Native, Expo, TypeScript &amp; native iOS maps; AI-assisted development</li>
      <li><strong>Current stage</strong>TestFlight beta; first public iPhone &amp; iPad release in preparation</li>
    </ul>
    <p class="case-links"><a href="/nomadtime">Explore NomadTime ↗</a><a href="/nomadtime/support">Support &amp; how it works ↗</a></p>

    <h2>A small window into a bigger world</h2>
    <p>When I was younger, I used to wander through Google Maps and Street View just to see what life looked like somewhere else. They felt like little free trips. NomadTime grew out of that feeling: the world should be accessible even when you cannot get on a plane.</p>
    <p>Travel also brought a practical question. If I kept my work commitments in one time zone and lived in another, when would I actually work, sleep, or talk to friends? A late-night call might mean finding a private room instead of staying in a hostel dorm. A time difference changes the shape of a day.</p>
    <p>The first useful version needed to answer something simple: <strong>“What would my day feel like there?”</strong></p>

    <figure class="case-screens">
      <img src="/nomadtime/clock.jpg" alt="NomadTime's photographic Los Angeles clock and shared 24-hour timeline" width="660" height="1434" loading="lazy">
      <img src="/nomadtime/ranges.jpg" alt="A saved Sleep range from 10:30 PM to 6:00 AM, showing the next day and a duration of 7 hours 30 minutes" width="660" height="1434" loading="lazy">
      <figcaption>Actual iOS release-candidate screens: one moment, or the shape of a whole night.</figcaption>
    </figure>

    <h2>Start with the decisions people make</h2>
    <p>I shaped the MVP around three situations: finding a meeting time across several cities, comparing work and sleep before choosing a destination, and saving the places and practical details I wanted to remember.</p>
    <p>The interaction begins with a shared 24-hour timeline. Photographic place cards show the same moment in each city; daylight shading makes the comparison legible at a glance. Named ranges such as Work and Sleep let people compare routines instead of repeatedly converting individual times.</p>
    <p>Portrait keeps the photographic layout. Landscape gives more space to the hour scales and local date changes. Optional controls collapse, while saved range toggles and navigation remain easy to find. Visible plus buttons complement the timeline gestures so someone does not have to discover the app by accident.</p>

    <h2>Let sleep continue through midnight</h2>
    <p>Early iterations exposed a deceptively important failure: an overnight range could look clipped at midnight. Sleep from 10:30 PM to 6:00 AM must remain one continuous interval, even though a 24-hour ruler draws it in two sections.</p>
    <blockquote>10:30 PM → 6:00 AM the next day<br><strong>One sleep range. Seven hours and thirty minutes.</strong></blockquote>
    <p>The range model and its visual representation needed to agree about the next day, duration, and source time zone. I kept those concepts explicit and made editing part of the core flow: drag endpoints, enter exact times, rename, lock, hide, or delete a range. Turning a range off preserves it for the next comparison.</p>
    <p>Repeated use also changed the layout. Separate editable range rows belong in the main Time controls; overlapping translucent shading belongs inside the destination clocks. Repeating all the editing controls in every city made the comparison harder to read.</p>

    <h2>One place, connected memories</h2>
    <p>A clock and a map pin can represent the same place. Treating them as unrelated objects created a frustrating gap: notes saved on a pin were not necessarily available when opening its clock. The product now connects those experiences while keeping their actions independent. Removing a clock should not erase a place's memories.</p>
    <p>Personal pins support names, notes, photos, and custom color labels. A clock is optional. The broader idea is a place-based memory system: keep a route, a story, or the instructions for reaching somewhere without having to organize everything into a formal trip first.</p>
    <figure class="case-map">
      <img src="/nomadtime/map.jpg" alt="NomadTime's native iOS map with a personal Places legend and persistent Clock and Map navigation" width="660" height="1434" loading="lazy">
      <figcaption>The map keeps the place in view, with a personal legend layered over it.</figcaption>
    </figure>

    <h2>Choose the architecture that serves the interaction</h2>
    <p>The original map ambition included an equal-area world view. In practice, a map that stalled or resisted panning undermined the entire experience. I prioritized a dependable native map on iOS, using Apple MapKit through React Native Maps, with platform-specific map renderers behind shared place actions.</p>
    <p>React Native, Expo, and TypeScript provide the application foundation. Clocks, ranges, pins, notes, and imported photos stay on the device; the core experience does not require an account. Maps and weather remain separate external services with clear privacy disclosures, rather than a reason to introduce an unnecessary application backend.</p>
    <p>I used AI-assisted development to iterate on the implementation, while keeping product decisions, architecture, and acceptance criteria explicit. Reusable mobile interaction and release patterns connect to my Product Factory tooling without making NomadTime depend on another app's data or runtime.</p>

    <h2>Test the experience people actually have</h2>
    <p>A successful build did not prove that long-press reordering, overnight dragging, or saving a note worked on a phone. TestFlight feedback exposed those gaps and helped define concrete acceptance journeys.</p>
    <ul>
      <li>Create an overnight range, drag an endpoint through midnight, and check its duration and destination dates.</li>
      <li>Reorder clocks, switch orientation, and keep the controls reachable without losing the comparison.</li>
      <li>Save a pin note, cancel an edit or photo selection, close the app, and verify the saved content on reopening.</li>
    </ul>
    <p>The release candidate has automated application checks and Release-mode iPhone and iPad simulator coverage for these journeys. Simulator coverage, physical-device feedback, and public App Store readiness are recorded as separate checks.</p>

    <h2>What exists now—and what comes next</h2>
    <p>NomadTime is a working TestFlight beta with photographic clocks, named and adjustable time ranges, personal map pins, and saved notes and photos. The first public iOS release is being prepared. The result so far is a usable foundation for comparing daily life across places, with real feedback shaping both the interface and its underlying model.</p>
    <p>Flight information, shared travel knowledge, richer map exports, and optional community features belong to future milestones. The long-term goal is a world people can explore, learn from, and contribute to, whether they are traveling or imagining a possibility from home.</p>
    <p>My main lesson was that beauty and reliability have to be developed together. The photographs invite someone to explore; predictable gestures, clear date boundaries, and trustworthy saved data give them a reason to stay.</p>
    <p class="case-links"><a href="/nomadtime">Visit NomadTime ↗</a><a href="/case-studies">More case studies →</a></p>
    `
    },

    "atlasTask": {
        "title": "AtlasTask: Designing a Calm Visual Second Brain",
        "imgSrc": "./infoposts/atlas-task.svg",
        "post": `
    <p><strong>Product status:</strong> Private alpha.</p>
    <p><strong>Disclosure:</strong> AtlasTask is a private product. This case study explains the customer problem, experience, architectural principles, and product decisions without publishing source code, repository access, personal data models, provider identifiers, release credentials, or implementation-level operating instructions.</p>

    <h2>Situation:</h2>
    <p>Most task apps are good at holding lists. They are less good at holding a life. One-off intentions, daily essentials, recurring care, long-running responsibilities, notes, costs, images, and the reason something matters often end up separated across reminders, calendars, documents, and memory.</p>

    <p>That fragmentation creates a specific kind of cognitive load: the user must repeatedly reconstruct the larger plan before deciding what to do today. AtlasTask began with a different premise. The system should remember the structure so the person can begin with one visible, manageable action.</p>

    <h2>What It Is:</h2>
    <p>AtlasTask is a local-first visual second brain for intentions, daily actions, recurring rhythms, responsibilities, notes, and personal context. It combines a calm Focus view for the current day with a spatial Life Map that keeps longer-term areas and projects visible without forcing everything into one flat priority list.</p>

    <p>The product is designed for people who benefit from external structure but do not want to be punished by it. Flexible timing, fresh daily completion state, small next actions, optional guides, and explicit release or archive states help the system adapt when a plan changes.</p>

    <h2>My Role:</h2>
    <p>I defined the product direction and built the experience across interaction design, information architecture, mobile and web engineering, local persistence, identity boundaries, accessibility, testing, release automation, and operational documentation.</p>

    <h2>Core Experience:</h2>
    <ul>
      <li><strong>Focus without losing context:</strong> A daily surface separates one-time actions from the small set of essentials that recur automatically. Previous and future days remain editable without erasing history.</li>
      <li><strong>Rhythms rather than rigid habits:</strong> Recurring care can follow fixed dates or completion-anchored intervals, including flexible ranges. Completion, skips, deferrals, estimated costs, and actual costs remain visible as part of the responsibility.</li>
      <li><strong>A spatial Life Map:</strong> Responsibilities and projects live in independently expandable areas with visual state, importance, notes, images, next actions, win conditions, and instructions. The map helps users see where attention is concentrated without turning life into a scoreboard.</li>
      <li><strong>Low-friction capture:</strong> Quests and quick capture provide a place for one-offs, ideas, and things to explore before the user knows exactly where they belong.</li>
      <li><strong>Recovery over punishment:</strong> Tasks can be completed, reopened, released, archived, restored, skipped, or moved. The product treats changed circumstances as information rather than failure.</li>
    </ul>

    <h2>Key Design Decisions:</h2>
    <ul>
      <li><strong>Local-first by default:</strong> AtlasTask opens without requiring an account or network connection. Personal records begin on the device, which supports immediate use and creates a clear privacy boundary.</li>
      <li><strong>Identity is optional and explicit:</strong> Signing in does not silently claim or merge a local workspace. Users choose whether to associate a local snapshot with an account, and account-owned records remain separated from guest records.</li>
      <li><strong>Time and importance are different:</strong> Something can be essential without being urgent, or urgent without defining a person's values. AtlasTask models those dimensions separately.</li>
      <li><strong>Visual calm is functional:</strong> Spacious layouts, expandable regions, shape and color cues, restrained motion, and direct language reduce the amount of interface a user must process at once.</li>
      <li><strong>Continuity matters:</strong> Product renaming and architectural evolution preserve stable saved-data and release identities. A better name or interface should not cost the user their history.</li>
      <li><strong>Release evidence is part of engineering:</strong> Browser interaction tests, native-device checks, accessibility review, versioned releases, and rollback context are treated as part of the product rather than cleanup after implementation.</li>
    </ul>

    <h2>Architecture:</h2>
    <p>The product uses a shared TypeScript foundation across an Expo mobile application and a web review surface. On-device persistence supports offline-first behavior. Product-specific experience remains separated from reusable UI, configuration, data, identity, analytics, and notification boundaries so useful patterns can be adopted elsewhere without coupling user data or product identity.</p>

    <p>Cloud synchronization, remote notifications, and production identity move through separate release gates. The interface does not imply that signing in is equivalent to backup or cross-device sync before those capabilities are implemented and verified.</p>

    <h2>Result:</h2>
    <p>AtlasTask has grown from a task-list concept into a coherent personal operating system with a working mobile alpha, a navigable daily flow, recurring responsibility tracking, a spatial planning model, local persistence, optional identity, and a disciplined release process.</p>

    <p>The most important outcome is not the feature count. It is the product's point of view: make the next action obvious, preserve the larger plan, and let the system carry organizational weight without becoming another source of pressure.</p>

    <h2>What This Demonstrates:</h2>
    <p>This work demonstrates end-to-end product engineering: identifying a human problem, creating an interaction model that does not simply imitate existing tools, and building the technical and operational boundaries required for the experience to remain trustworthy as it grows.</p>
    `
    },

    "supplementAi": {
        "title": "Supplement AI: Making Supplement Stacks Understandable Without Inventing Certainty",
        "imgSrc": "./infoposts/supplement-ai.svg",
        "post": `
    <p><strong>Product status:</strong> Private validation build.</p>
    <p><strong>Disclosure:</strong> Supplement AI is a private pre-release product, not a medical device. This case study describes the product and safety architecture without exposing source code, repository access, prompts, extraction schemas, private health data, provider configuration, security controls, or deployment instructions.</p>

    <h2>Situation:</h2>
    <p>Supplement labels are difficult to compare across products. Serving sizes differ, nutrient units do not always align, proprietary blends obscure detail, and a person taking several bottles may have no reliable view of their combined daily intake.</p>

    <p>AI can make label capture easier, but it also introduces risk. A model that misreads a quantity, fills in a missing fact, or turns general nutrition context into personal medical advice can create false confidence. The product challenge was not simply to analyze supplements. It was to make the useful parts of AI reviewable while keeping arithmetic, uncertainty, ownership, and safety boundaries explicit.</p>

    <h2>What It Is:</h2>
    <p>Supplement AI is a private supplement tracker that helps a user photograph label panels, review the extracted facts, confirm how much they take, and understand totals across their full stack. It is designed to surface overlap, unknowns, source context, and useful questions without diagnosing conditions or prescribing treatment.</p>

    <p>The experience also supports optional personal context and food-intake notes for more relevant comparisons. Missing information remains missing, and users can choose a general reference view without disclosing personal details.</p>

    <h2>My Role:</h2>
    <p>I shaped the product strategy and built the adopted application foundation, tracker workflow, AI boundary, deterministic calculation model, private account model, safety language, responsive experience, testing strategy, and release criteria.</p>

    <h2>Core Experience:</h2>
    <ul>
      <li><strong>Photograph the evidence:</strong> A user can capture multiple panels from one bottle so serving information, ingredient rows, forms, units, and supporting label context can be considered together.</li>
      <li><strong>Review before trusting:</strong> Extracted label facts are presented for human review. The original transcription remains separate from the user's confirmed daily amount and later corrections.</li>
      <li><strong>See the whole stack:</strong> Confirmed entries roll into a daily stack with contributing products visible for each total. Pausing a bottle changes current totals without deleting its record.</li>
      <li><strong>Preserve uncertainty:</strong> Unreadable amounts remain unknown. Incompatible units remain separate. The product does not invent conversions or silently collapse blend totals into their child ingredients.</li>
      <li><strong>Add context by choice:</strong> Optional typed or spoken intake can help prepare an editable profile. The user reviews it before saving, and unanswered questions do not block the experience.</li>
      <li><strong>Ask better questions:</strong> The product is designed to help users notice overlap and prepare conversations with a clinician or pharmacist, not to replace those professionals.</li>
    </ul>

    <h2>Key Design Decisions:</h2>
    <ul>
      <li><strong>AI transcribes; code calculates:</strong> The model returns structured label facts. Deterministic application logic performs unit-aware totals and comparisons. A language model never performs the final arithmetic.</li>
      <li><strong>Exactness before presentation:</strong> Decimal quantities are summed before display rounding. Compatible mass units can be normalized, while unrelated measurement systems remain visibly distinct.</li>
      <li><strong>Unknown is a valid result:</strong> Missing quantities, unreadable serving information, and unsupported conversions are shown as limitations instead of being filled with plausible guesses.</li>
      <li><strong>Personal context is optional:</strong> Users can receive general starting references without completing a profile. When details are supplied, each comparison explains which information it used.</li>
      <li><strong>Facts, guidance, and medical care stay separate:</strong> Label extraction, reference comparisons, and educational context have different trust levels. The interface avoids deficiency diagnoses, treatment instructions, and automatic supplement prescriptions.</li>
      <li><strong>Private records are owner-scoped:</strong> Identity is verified by the server boundary, records cannot select their own owner, and account mutations use revision-aware behavior to prevent silent conflicts.</li>
      <li><strong>Release is evidence-gated:</strong> A polished local flow is not treated as proof of live extraction accuracy, hosted privacy, recovery, native sign-in, or production readiness. Those claims remain held until their own tests pass.</li>
    </ul>

    <h2>Architecture:</h2>
    <p>Supplement AI uses a shared web and mobile TypeScript foundation with product-owned tracker and analysis domains. Submitted images and model output are treated as untrusted input, validated against strict contracts, and connected to reviewed facts through traceable versions. Deterministic services own totals and reference comparisons. Identity, private storage, observability, and deployment are separate capabilities with independent activation and verification.</p>

    <p>This separation is deliberate. It allows the product to improve extraction models or user experience without changing the meaning of previously reviewed records, and it prevents a convenient AI response from bypassing application validation.</p>

    <h2>Result:</h2>
    <p>The product now has a working private tracker foundation that moves from label photos to reviewable facts, confirmed daily amounts, durable stack records, and traceable totals. It also has an inclusive optional intake model, editable profile review, general-reference fallback, and explicit safety and release boundaries.</p>

    <p>The larger result is a more honest model for AI-assisted health software. The product uses AI where ambiguity and transcription benefit from it, deterministic systems where precision matters, and visible human review where neither should be trusted silently.</p>

    <h2>What This Demonstrates:</h2>
    <p>This work demonstrates my ability to design AI products where usefulness and restraint are equally important. I can build the interaction, data, identity, calculation, and release systems around a model so the resulting product is more trustworthy than a prompt wrapped in a user interface.</p>
    `
    },

    "releaseofreleases": {
        "title": "Release of Releases - Release Orchestration through Automation",
        "imgSrc": "./infoposts/ror.png",
        "post": `
    <h2>Situation:</h2>
    <p>As a Senior DevOps Lead Engineer, I enhanced the release management process for both cloud and on-premises deployments at loanDepot. The existing system lacked efficiency due to manual error-prone processes. It had significant dependencies that caused delays and errors. My goal was to create a customer orchestration solution using Azure DevOps, pipelines, and PowerShell to streamline the release process and ensure proper dependency management. Spoiler alert: we went from 26 teams manually deploying their products to full automation for over 1200+ components and releases that went until 4 or 6:30 am to releases that ended a little after midnight, on average. I love giving people their time back.</p>

    <h2>Task:</h2>
    <p>I began by analyzing the existing release management process and identifying the key pain points. I realized that there was a lack of pipeline automation among projects that had dependencies on Projects involved in the deployment, leading to miscommunications and delays, downtime and race conditions. The dependencies between different components were not properly tracked, resulting in frequent conflicts during releases.</p>

    <h2>Action:</h2>
    <p>To address these challenges, I designed and implemented a comprehensive release orchestration system using Azure DevOps, pipelines, additions to the company's bespoke CMDB, and custom PowerShell for orchestration with Windows Task Manager to ensure proper dependency handling between on-prem and cloud components. These were my tactics:</p>

    <ul>
    <h3><strong>Planning and Design:</strong></h3> <li>I collaborated with cross-functional teams, including developers, testers, and operations, to understand their requirements and establish a clear roadmap for the project. We defined the desired workflow, identified the critical dependencies, and outlined the necessary stages for both cloud and on-premises deployments.</li>
    <h3><li><strong>Azure DevOps Setup:</strong></h3> I configured Azure DevOps to support the new release orchestration process. This involved creating a dedicated project, setting up repositories, and configuring pipelines for different deployment environments.</li>
    <h3><li><strong>Dependency Mapping:</strong></h3> Using Azure DevOps, I developed a dependency mapping system that allowed teams to define and track dependencies between different components using the company's pre-existing custom CMDB. This information was stored in a centralized repository and served as the foundation for orchestrating the release process in the correct order.</li>
    <h3><li><strong>Pipeline Creation:</strong></h3> Leveraging Azure Pipelines, I created a series of automated release pipelines tailored to the specific requirements of each component using PowerShell automation and cleansed data from the CMDB. These pipelines included stages for building, testing, and deploying the software artifacts. To ensure proper dependency management, I integrated the dependency mapping system with the pipelines, enabling the release orchestration process to execute in the correct order.</li>
    <h3><li><strong>PowerShell Scripting:</strong></h3> To facilitate the customization of the release process, I developed a PowerShell script called "Release of Releases" that allowed teams to define their specific deployment requirements and execute them seamlessly within the pipelines. This script orchestrated the deployment, removing human error and increasing the speed of the process by 3 or 4 hours on average. The DevTools front end created in Angular enabled teams to add their app settings and deploy the applications and infrastructure components in the desired sequence through automation, further enhancing the dependency management capabilities.</li>
    </ul>

    <h2>Result:</h2>
    <p>By implementing the customer orchestration solution for cloud and on-premises releases using Azure DevOps, pipelines, and PowerShell, I achieved the following outcomes:</p>

    <ul>
    <h3><strong>Streamlined Release Process:</strong></h3> <li>The new release orchestration system significantly improved the coordination and communication among teams, eliminating delays and reducing the risk of conflicts during deployments. No more struggling to resolve side effect errors during a live deployment, no more deployment collisions for on-prem components deployed on the same servers, and no more 4 or 6 am releases.</li>
    <h3><strong>Enhanced Dependency Management:</strong></h3> <li>The dependency mapping system and the integration with the pipelines ensured that releases occurred in the correct order, minimizing errors and maximizing the overall efficiency of the process.</li>
    <h3><strong>Increased Deployment Flexibility:</strong></h3> <li>The PowerShell scripts provided teams with the ability to customize their deployment requirements, enabling them to adapt the release process to their specific needs without sacrificing the standardized orchestration framework.</li>
    <h3><strong>Improved Time-to-Market:</strong></h3> <li>The efficient release management process enabled faster deployments, allowing the company to deliver new features and updates to customers more quickly, enhancing their overall experience.</li>
    </ul>

    <p>By leveraging Azure DevOps, pipelines, and PowerShell, I successfully designed and implemented a customer orchestration solution for cloud and on-premises releases. This solution streamlined the release process, improved dependency management, increased deployment flexibility, and ultimately contributed to improved time-to-market for the organization.</p>
    `
    },

    "iacPipelineValidation": {
        "title": "Who Tests the Testers - IaC Pipeline Validation",
        "imgSrc": "./infoposts/iac-pipeline-test.png",
        "post": `
    <h2>Situation:</h2>
    <p>As a team, we decided to set up a system where multiple teams could contribute to and use modules using Bicep modules (the Azure version of Terraform IaC, which we also used). Very quickly the trustworthiness of code added to this repo became questionable, breaking deployments due to untested modules being tested, approved, and merged. Seeing this as an issue that could bloom into a long-term headache, I rushed to create a pipeline that tested the modules before they were merged to ensure efficacy of what we had in our repo.</p>

    <h2>Task:</h2>
    <p>I established a pipeline in ADO for code merging that would ensure the quality and reliability of the IaC Bicep modules through integration tests and tracking. This involved writing Bicep modules as components for different Azure services, enabling teams to leverage them seamlessly. Additionally, I aimed to implement state tracking for test results and versioning for the published Bicep modules within the ACR.</p>

    <h2>Action:</h2>
    <p>To accomplish these objectives, I followed the following steps:</p>

    <ul>
    <li><strong>Bicep Module Development:</strong> I wrote a significant number of Bicep modules as reusable components for different Azure services. These modules served as building blocks that could be easily pulled and integrated by various operations and development teams across the organization. By adopting the DRY principle using Terragrunt's tried and tested method of scaffolding modules, I ensured consistency, reduced redundancy, and facilitated code maintenance.</li>
    <li><strong>Pipeline Creation:</strong> I designed and implemented a pipeline in ADO to validate the efficacy of the Bicep modules. This pipeline encompassed multiple stages, including linting, unit testing, integration testing, and security scanning. Each stage aimed to identify potential issues and validate the modules' integrity and functionality. As one might imagine, integration testing is time-consuming.</li>
    <li><strong>Automated Publishing:</strong> Once the Bicep modules successfully passed all tests, I implemented an automated process to publish them to the ACR. The pipeline utilized semantic versioning (semver) to tag and store the published modules, ensuring traceability and easy retrieval for consuming teams.</li>
    <li><strong>State Tracking:</strong> To keep track of the test results and maintain the state of the modules post-commit, I utilized Azure resource group tagging. By associating tags with the resource groups, I stored the state information as JSON strings, enabling easy decoding and retrieval for modules that depended on those specific resource groups.</li>
    </ul>

    <h2>Result:</h2>
    <p>The efforts invested in writing Bicep modules, establishing a robust pipeline, and implementing effective state tracking yielded the following outcomes:</p>

    <ul>
    <li><strong>Efficient Module Development:</strong> The creation of numerous reusable Bicep modules as components significantly streamlined the workflows of operations and development teams. By providing a standardized structure and utilizing the Terragrunt format, I ensured consistency and accelerated development cycles.</li>
    <li><strong>Reliable Testing and Validation:</strong> The pipeline in ADO effectively tested the Bicep modules, including linting, unit testing, integration testing, and security scanning. This comprehensive approach improved the quality and reliability of the modules, reducing the risk of deployment issues and enhancing overall system stability.</li>
    <li><strong>Automated Publishing and Versioning:</strong> The pipeline automatically published the tested Bicep modules to the ACR, allowing multiple teams to pull down the modules based on their specific requirements. By leveraging semantic versioning, teams could easily manage and track module versions, ensuring smooth and controlled deployments.</li>
    <li><strong>Enhanced State Tracking:</strong> Utilizing Azure resource group tagging and storing the state as JSON strings provided a convenient and reliable way to track the test results and maintain the state of the modules. This approach ensured transparency and simplified the identification of dependencies and potential issues.</li>
    </ul>

    <p>In conclusion, as a Senior DevOps Engineer, I successfully developed a pipeline in ADO to validate the efficacy of IaC Bicep modules before their automatic publication to the ACR. Additionally, I wrote numerous Bicep modules as reusable components and kept the structure consistent throughout the organization, following Gruntwork's Terragrunt format. Through these efforts, I enhanced the efficiency of module development, improved testing and validation processes, automated publishing and versioning, and implemented effective state tracking. The outcome was a more reliable and streamlined infrastructure deployment process for the entire company.</p>
    `
    },

    "cmdletCreationTemplate": {
        "title": "Empowering DevOps Excellence: Training and Guardrails for Those New to Powershell",
        "imgSrc": "./infoposts/cmdletautomation.png",
        "post": `
    <h2>Situation:</h2>
    <p>As a Senior DevOps Engineer, I observed inconsistent PowerShell practices within my team,
    hindering our efficiency and reliability in managing distributed systems and internal operations.
    Recognizing the need for a standardized approach, I embarked on a mission to revolutionize our PowerShell conventions.</p>

    <h2>Task:</h2>
    <p>I took the initiative to create cmdlets and templates that would not only teach but also
    reinforce good PowerShell conventions. By leveraging my expertise in distributed systems and
    internal operations, I aimed to establish code best practices that would elevate our DevOps processes.</p>

    <h2>Action:</h2>
    <p>1. Recognizing the Need for Consistency:</p>
    <ul>
    <li>I identified the challenges caused by inconsistent PowerShell practices and realized the
    importance of establishing uniformity within our team.</li>
    </ul>

    <p>2. Creating Educational and Reinforcement Tools:</p>
    <ul>
    <li>I developed a set of cmdlets and templates that simplified complex tasks and served as practical examples of best practices.</li>
    <li>These tools not only taught our team members but also provided a tangible framework to follow in their daily work.</li>
    </ul>

    <p>3. Collaborative Approach to Code Best Practices:</p>
    <ul>
    <li>I fostered collaboration within the team to determine the code best practices that would align
    with our distributed systems and internal operations.</li>
    <li>By involving everyone in the decision-making process, we ensured ownership and tailored the
    conventions to our specific needs.</li>
    </ul>

    <p>4. Streamlining Operations with Custom Templates:</p>
    <ul>
    <li>In addition to cmdlets, I created customized templates that provided a structured starting point for our scripts.</li>
    <li>These templates reduced errors, encouraged adherence to best practices, and streamlined our operations.</li>
    </ul>

    <p>5. Continuous Learning and Improvement:</p>
    <ul>
    <li>I organized regular knowledge-sharing sessions and workshops to keep the team updated on emerging PowerShell practices.</li>
    <li>We embraced a culture of continuous learning, enabling us to constantly improve our conventions and stay ahead in the DevOps landscape.</li>
    </ul>

    <h2>Result:</h2>
    <ul>
    <li>Improved efficiency and reliability in managing our distributed systems and internal operations.</li>
    <li>Enhanced understanding and adoption of best practices through educational cmdlets and templates.</li>
    <li>Fostered a collaborative environment where everyone had a stake in defining and implementing the code best practices.</li>
    <li>Streamlined operations and reduced errors by utilizing custom templates.</li>
    <li>Cultivated a culture of continuous learning, enabling us to stay at the forefront of DevOps excellence.</li>
    </ul>

    <h2>Conclusion:</h2>
    <p>Through my efforts as a Senior DevOps Engineer, I successfully revolutionized our PowerShell conventions.
    By creating educational cmdlets, custom templates, and fostering collaboration, we achieved a new level of
    consistency, efficiency, and reliability in managing our distributed systems and internal operations. Our
    dedication to continuous learning and improvement ensures that we remain at the forefront of DevOps excellence.</p>
    `
    },

    "amplifyReactMigApp": {
        "title": "Transforming App Migrations with Amplify React",
        "imgSrc": "./infoposts/mig-app.png",
        "post": `
    <h2>Situation:</h2>
    <p>As a Senior DevOps Architect at a major healthcare company, I recognized the need to streamline
    and enhance the migration process for deploying products to AWS Service Catalog. The existing manual
    approach was time-consuming and prone to errors, hampering speed and efficiency in our operations.</p>

    <h2>Task:</h2>
    <p>I took the initiative to create an Amplify React full stack application that would revolutionize the
    migration process for our engineers. My goal was to improve speed, efficiency, and security while
    reducing errors, ultimately cutting the time spent on migrations in half.</p>

    <h2>Action:</h2>
    <p>1. Assessing the Challenges:</p>
    <ul>
    <li>I closely examined the existing migration process and identified its pain points, including the manual
    nature, time-consuming tasks, and the potential for errors.</li>
    <li>Understanding the significance of security in the healthcare industry, I prioritized the need to ensure
    a secure and swift migration process.</li>
    </ul>

    <p>2. Designing the Amplify React Application:</p>
    <ul>
    <li>I architected an Amplify React application that would serve as a comprehensive tool for the migration engineers.</li>
    <li>The application incorporated front-end user interfaces, back-end services, and seamless integration with AWS Service Catalog.</li>
    </ul>

    <p>3. Enhancing Speed and Efficiency:</p>
    <ul>
    <li>By leveraging the power of Amplify and React, I created intuitive user interfaces that simplified the migration tasks.</li>
    <li>The application automated repetitive processes, reducing manual efforts and minimizing the time required for migrations.</li>
    </ul>

    <p>4. Ensuring Security and Error Reduction:</p>
    <ul>
    <li>I implemented stringent security measures within the application, adhering to industry best practices and compliance standards.</li>
    <li>The application incorporated validation checks and error handling mechanisms to prevent and minimize migration errors.</li>
    </ul>

    <p>5. Collaborating with Migration Engineers:</p>
    <ul>
    <li>I actively engaged with the migration engineers to gather their feedback and understand their specific needs and pain points.</li>
    <li>Through collaborative iterations and feedback loops, I fine-tuned the application to address their requirements effectively.</li>
    </ul>

    <h2>Result:</h2>
    <ul>
    <li>Significant improvement in speed and efficiency, with the time spent on migrations reduced by half.</li>
    <li>Enhanced security measures, ensuring the secure deployment of products to AWS Service Catalog.</li>
    <li>Drastic reduction in errors, thanks to the application's validation checks and error handling mechanisms.</li>
    </ul>

    <h2>Positive Reviews:</h2>
    <ul>
    <li><strong>Business Stakeholder:</strong> "The Amplify React application developed by our Senior DevOps Architect
    revolutionized our migration process. It saved us valuable time and resources while ensuring secure and swift
    deployments to AWS Service Catalog."</li>
    <li><strong>Lead Engineer:</strong> "The new application has been a game-changer. It simplifies the migration tasks, reduces
    errors, and boosts our productivity. The integration with AWS CloudFormation templates and CI/CD CodeDeploy
    pipelines has made our deployments more efficient and streamlined."</li>
    </ul>

    <h2>Conclusion:</h2>
    <p>As a Senior DevOps Architect, the creation of an Amplify React application revolutionized the migration process
    for our major healthcare company. By improving speed, efficiency, security, and error reduction, we cut the time
    spent on migrations in half. The success of this project demonstrates the power of innovation and collaboration
    in driving positive change within our organization.</p>
    `
    },

    "agenticWorkflowApp": {
        "title": "Agentic Workflow App: Turning Scattered Production Signals into Infrastructure Intelligence",
        "imgSrc": "./infoposts/agentic-workflow.png",
        "post": `
    <h2>Situation:</h2>
    <p>At WFG Digital, production applications were scattered across repositories with no centralized way to understand what existed, who owned it, how it was deployed, or what its release history looked like. Runbooks lived in wikis nobody maintained. Jira tracked work but not systems. Git history contained truth but nobody was reading it systematically. Teams were making decisions - architecture, staffing, priority - without a clear map of the landscape they were working in.</p>

    <h2>Task:</h2>
    <p>I needed to build a system that could identify, catalog, and analyze WFG production applications by combining signals from multiple sources - git repositories, Jira release data, and runbook documentation - into a single navigable interface. The goal wasn't just a dashboard. It was infrastructure intelligence: a system that surfaces ownership, deployment patterns, risk indicators, and relationship data that teams can act on.</p>

    <h2>Action:</h2>
    <ul>
    <li><strong>Agentic Architecture:</strong> Designed the app as an agentic workflow - AI-driven analysis pipelines that ingest git metadata, parse Jira tickets for release context, and cross-reference runbook data to build a composite picture of each application's state, ownership, and operational patterns.</li>
    <li><strong>Git Analysis Engine:</strong> Built automated analysis of repository structure, commit patterns, contributor graphs, and deployment artifact relationships to identify active vs. dormant applications, ownership concentration, and architectural patterns.</li>
    <li><strong>Jira Integration:</strong> Connected release and delivery data from Jira to map deployment cadence, incident frequency, and team velocity per application - turning project management data into operational intelligence.</li>
    <li><strong>Self-Service Interface:</strong> Built an internal web application that lets teams explore the production landscape, understand dependencies, and make informed decisions without needing to ask someone who "just knows."</li>
    </ul>

    <h2>Result:</h2>
    <ul>
    <li><strong>Visibility:</strong> For the first time, teams could see the full landscape of production applications - what exists, who owns it, how often it deploys, and where the risks concentrate.</li>
    <li><strong>Decision Quality:</strong> Architecture and staffing decisions became data-informed rather than tribal-knowledge-dependent.</li>
    <li><strong>Leverage Pattern:</strong> The app embodies the core principle: build a system once that continuously generates intelligence, rather than relying on people to manually track and communicate state.</li>
    </ul>

    <p>This project represents the kind of work I find most valuable - turning scattered technical signals into something teams can use to understand ownership, risk, dependencies, and next steps. The system does the work so people don't have to.</p>

    <h2>The App</h2>
    <img src="./infoposts/agentic-repo-screenshot.jpg" alt="Agentic Workflow App screenshot showing repository analysis interface" style="width:100%; border-radius:12px; margin:1rem 0;" />
    `
    },

    "cognitoIdentityArchitecture": {
        "title": "Cognito + Enterprise Identity: Auth Architecture for 250K External Agents",
        "imgSrc": "./infoposts/cognito-identity.png",
        "post": `
    <h2>Situation:</h2>
    <p>WFG Digital Portal needed a secure, scalable authentication system to serve approximately 250,000 external agents. The platform required enterprise identity integration - connecting Cognito to existing corporate identity providers while maintaining the security posture, session management, and access patterns appropriate for a financial services platform with external users at scale.</p>

    <h2>Task:</h2>
    <p>Design and implement the full authentication architecture: Cognito configuration, enterprise identity provider integration, IAM policies, API Gateway authorization, Terraform infrastructure, and the auth flow patterns that would serve as the foundation for the portal. This wasn't just "set up Cognito" - it was designing the identity layer for a platform where getting auth wrong means regulatory risk, user friction, and security exposure at scale.</p>

    <h2>Action:</h2>
    <ul>
    <li><strong>Architecture Design:</strong> Designed the complete auth flow - user pools, identity pools, enterprise federation, token management, session handling, and the integration points between Cognito, API Gateway, and downstream services.</li>
    <li><strong>Terraform Implementation:</strong> Built the entire identity infrastructure as code - Cognito user pools, app clients, identity providers, IAM roles and policies, API Gateway authorizers - all reproducible, auditable, and environment-promotable.</li>
    <li><strong>IAM & API Gateway:</strong> Designed fine-grained IAM policies and API Gateway authorization patterns that enforce least-privilege access while keeping the developer experience clean for teams building on top of the platform.</li>
    <li><strong>Enterprise Federation:</strong> Integrated with corporate identity providers to enable SSO flows while maintaining the Cognito-native patterns that external agents would authenticate through.</li>
    <li><strong>Security Posture:</strong> Designed MFA flows, token rotation, session management, and account recovery patterns appropriate for financial services compliance requirements.</li>
    </ul>

    <h2>Result:</h2>
    <ul>
    <li><strong>Scale-Ready Auth:</strong> A production identity system serving ~250K external agents with enterprise-grade security, built entirely in Terraform and designed to be maintained by the team long after initial implementation.</li>
    <li><strong>Developer Leverage:</strong> Teams building features on the portal inherit a well-designed auth layer - they don't need to think about identity, tokens, or authorization patterns because the platform handles it correctly by default.</li>
    <li><strong>Compliance Foundation:</strong> The architecture satisfies financial services security requirements by design, not by afterthought - audit trails, session controls, and access patterns are baked into the infrastructure layer.</li>
    </ul>

    <p>Identity is one of those systems where getting it right early pays off for a long time - every team building on the platform benefits from decisions made once at the foundation layer. Getting it wrong creates compounding technical debt and security risk. This project was about getting it right.</p>
    `
    },

    "almModernization": {
        "title": "ALM Modernization: Replacing Legacy Systems with Event-Driven AWS Patterns",
        "imgSrc": "./infoposts/alm-modernization.png",
        "post": `
    <h2>Situation:</h2>
    <p>Transamerica's ALM (Asset Liability Management) hedging systems ran on legacy on-premises and EC2-based workflows - batch-oriented, manually triggered, operationally expensive, and fragile. The modeling teams depended on Windows Service systems for data processing and email-based reporting for finance, risk, and executive stakeholders. When something broke, recovery was manual and tribal-knowledge-dependent. The systems worked, but they didn't scale, didn't self-heal, and didn't give teams the operational visibility they needed.</p>

    <h2>Task:</h2>
    <p>Lead the modernization of ALM hedging systems - replace legacy workflows with AWS-native patterns that improve reliability, reduce operational overhead, and create a foundation that modeling teams can build on rather than work around. Simultaneously, replace the manual email-based reporting system with a centralized, self-service data platform.</p>

    <h2>Action:</h2>
    <ul>
    <li><strong>Event-Driven Architecture:</strong> Designed and implemented replacements for legacy batch workflows using Lambda, S3, and event-driven pipeline patterns - moving from "someone runs this manually" to "the system reacts to data arriving."</li>
    <li><strong>Data Pipeline Design:</strong> Redesigned data ingestion and processing pipelines for high-volume financial, market, and policy data - improving throughput, reliability, and observability across the pipeline stages.</li>
    <li><strong>Self-Service Data Platform:</strong> Replaced manual email-based reporting with a centralized data platform that finance, risk, and executive stakeholders could query directly - removing the dependency on someone generating and sending reports manually.</li>
    <li><strong>Web Application POC:</strong> Built a web application proof-of-concept to replace existing Windows Service systems, demonstrating that the same processing could be handled by modern, maintainable, observable services rather than opaque background processes.</li>
    <li><strong>Standards & Frameworks:</strong> Created reusable Python API + React frameworks with Engineering Excellence to standardize internal application development across modeling teams - so the modernization pattern could be repeated without re-inventing it each time.</li>
    <li><strong>AI-Assisted Development:</strong> Introduced agentic AI workflows (Amazon Q, Kiro) to ALM developers, improving productivity and establishing patterns for AI-assisted development that teams adopted independently.</li>
    </ul>

    <h2>Result:</h2>
    <ul>
    <li><strong>Operational Improvement:</strong> Reduced operational overhead by replacing manual, batch-oriented workflows with event-driven systems that self-trigger, self-monitor, and surface failures automatically rather than silently.</li>
    <li><strong>Stakeholder Self-Service:</strong> Finance, risk, and executive stakeholders gained direct access to the data they needed without waiting for someone to generate and email a report - decisions happen faster when data access doesn't have a human bottleneck.</li>
    <li><strong>Repeatable Patterns:</strong> The frameworks and standards built during this work became the default for new internal applications - each new project starts further ahead because the foundation patterns already exist.</li>
    <li><strong>Developer Productivity:</strong> AI-assisted development patterns improved how teams write and review code, with adoption spreading organically beyond the initial ALM teams.</li>
    </ul>

    <p>This project exemplifies the transition from "systems that work when someone watches them" to "systems that work because they're designed to." The goal was never just to migrate to AWS - it was to build the kind of infrastructure that makes the next team's job easier, not harder.</p>
    `
    },

    "metadataDb": {
        "title": "MetadataDB: Building a Private Control Plane for a Growing Product Portfolio",
        "imgSrc": "./infoposts/metadata-db.svg",
        "post": `
    <p><strong>Disclosure:</strong> MetadataDB is a private internal system. This case study describes its purpose, product thinking, and architectural boundaries without publishing source code, repository locations, account details, schemas, secret references, or operational procedures.</p>

    <h2>Situation:</h2>
    <p>As a product portfolio grows, the code is rarely the hardest thing to recover. The missing context is harder: which services belong to which product, who owns each provider account, what is deployed, which configuration a component expects, what another system depends on, and what evidence supports the current state.</p>

    <p>That information tends to scatter across repositories, cloud consoles, billing portals, local notes, pipeline logs, and memory. The result is operational drag. A small change begins with archaeology, handoff depends on one person's recall, and a product that is technically backed up may still be difficult to rebuild or operate.</p>

    <h2>What It Is:</h2>
    <p>MetadataDB is a private, typed configuration and operations catalog for the products I maintain. It models products, independently managed components, environments, provider ownership, configuration interfaces, system relationships, deployment history, cost evidence, and operational provenance without copying secret values or product data into the catalog.</p>

    <p>It acts as a control plane for understanding the portfolio. It answers what exists, how the pieces relate, where responsibility lives, what was intended, what was deployed, what was observed, and what still needs evidence.</p>

    <h2>My Role:</h2>
    <p>I designed the domain model, architecture, validation strategy, command-line workflows, security boundaries, and operating model. The work combined systems architecture, configuration management, developer experience, release engineering, governance, and product thinking.</p>

    <h2>Key Design Decisions:</h2>
    <ul>
      <li><strong>Typed records over an informal inventory:</strong> Durable identities, versioned contracts, and validated relationships make the catalog queryable and maintainable. Names and providers can change without breaking the conceptual model.</li>
      <li><strong>Products and components are different:</strong> A product describes a business capability. Components describe independently managed applications, services, data stores, infrastructure, pipelines, and integrations. Keeping those boundaries explicit prevents repositories and cloud resources from becoming the architecture by accident.</li>
      <li><strong>Relationships are first-class:</strong> Connections such as invokes, authenticates with, deploys, observes, or publishes to are modeled as directional relationships. That makes dependency and ownership questions answerable without reverse-engineering code.</li>
      <li><strong>Desired, deployed, and observed state stay separate:</strong> A requested configuration is not proof of deployment, and a successful deployment record is not proof that a system remains healthy. The model preserves those distinctions instead of reducing them to one mutable status field.</li>
      <li><strong>Secrets stay in their proper boundary:</strong> MetadataDB records safe locators, ownership, consumers, and lifecycle expectations. Credentials remain in managed secret systems, product data remains in product databases, and infrastructure state remains in its backend.</li>
      <li><strong>Evidence is append-only:</strong> Deployment results, observations, artifacts, costs, and decisions form an auditable history. Current views can be generated, but the evidence behind them is not silently overwritten.</li>
      <li><strong>Automation is constrained:</strong> Structured records can select reviewed operations and provide validated inputs, but they cannot inject arbitrary commands. This keeps the catalog useful to people and agents without turning metadata into an execution vulnerability.</li>
    </ul>

    <h2>What It Does:</h2>
    <ul>
      <li>Builds a navigable view of products, components, environments, owners, and system relationships.</li>
      <li>Validates records and references before incomplete context becomes accepted operational truth.</li>
      <li>Produces deterministic, read-only deployment plans from recorded dependencies and environment policy.</li>
      <li>Distinguishes intended state from deployment receipts and live observations.</li>
      <li>Preserves the context required for maintenance, recovery, cost review, and eventual handoff.</li>
      <li>Provides a shared contract that product-generation and deployment tooling can consume safely.</li>
    </ul>

    <h2>Result:</h2>
    <p>MetadataDB turns a collection of projects into an operable portfolio. Instead of reconstructing context from scattered tools each time work resumes, there is one validated model for ownership, relationships, configuration boundaries, delivery history, and evidence.</p>

    <p>The deeper result is continuity. Products can pause and resume without depending entirely on memory. Automation can operate against explicit contracts. Handoff becomes a designed capability rather than a future documentation emergency.</p>

    <h2>What This Demonstrates:</h2>
    <p>This work demonstrates how I approach systems that have to remain understandable over time. I am not only designing for the next deployment. I am designing for the future operator who needs to know what exists, why it exists, how it is connected, and what evidence is trustworthy.</p>
    `
    },

    "productFactory": {
        "title": "Product Factory: Turning Repeatable Architecture into a Product Delivery System",
        "imgSrc": "./infoposts/product-factory.svg",
        "post": `
    <p><strong>Disclosure:</strong> Product Factory is a private internal platform. This case study shares the product strategy and engineering principles while intentionally withholding source code, repository access, reusable implementation packages, generation contracts, prompts, and detailed operating procedures.</p>

    <h2>Situation:</h2>
    <p>Building a second product should not mean rebuilding authentication boundaries, observability, deployment workflows, application structure, quality gates, documentation, and operational standards from memory. But reusable platforms often fail in the opposite direction: they become abstract, oversized frameworks designed before real products prove what should be shared.</p>

    <p>I wanted a middle path. The goal was to make new products faster to start and safer to operate while allowing each one to retain its own business model, customer experience, architecture decisions, and release lifecycle.</p>

    <h2>What It Is:</h2>
    <p>Product Factory is a private product-generation and delivery system for AI-assisted software development. It turns a validated product idea into a structured starting point for web, mobile, backend, infrastructure, operations, and growth work. Shared capabilities live behind clear package and contract boundaries, while product-specific strategy and implementation remain with the product.</p>

    <p>It is intentionally milestone-based. The factory earns reusable abstractions through real product needs instead of creating a large speculative platform upfront.</p>

    <h2>My Role:</h2>
    <p>I created the product model, repository architecture, generation workflows, reusable capability boundaries, agent collaboration model, infrastructure standards, security gates, observability baseline, and release discipline. I also designed how generated products register with MetadataDB so creation, ownership, delivery, and operational evidence remain connected.</p>

    <h2>How It Works:</h2>
    <ul>
      <li><strong>Start with product intent:</strong> Each product begins with a brief, scope, user problem, architecture decisions, roadmap, and milestones. Technology follows a defined business function instead of becoming the product plan.</li>
      <li><strong>Generate a bounded foundation:</strong> The system creates a consistent product structure with explicit web, mobile, service, data, infrastructure, and operational boundaries as needed.</li>
      <li><strong>Reuse capabilities, not assumptions:</strong> Common concerns such as configuration, UI foundations, API contracts, identity, data, billing, analytics, AI, notifications, and observability have designated homes. A capability is adopted when the product requires it, not merely because the factory can provide it.</li>
      <li><strong>Make operations part of the product:</strong> Ownership tags, structured telemetry, alarms, budgets, deployment evidence, recovery expectations, and handoff documentation are designed alongside application code.</li>
      <li><strong>Coordinate specialized work:</strong> Clear role and signoff boundaries allow human and AI contributors to work across strategy, architecture, frontend, backend, quality, infrastructure, growth, and release without collapsing accountability.</li>
      <li><strong>Gate releases with evidence:</strong> Type checks, tests, builds, dependency review, security checks, environment approval, and immutable release context keep speed from eroding trust.</li>
      <li><strong>Feed the portfolio control plane:</strong> Generated products register their product and component boundaries with MetadataDB. Product Factory owns reusable implementation patterns; MetadataDB owns the record of what exists and what happened.</li>
    </ul>

    <h2>Key Design Decisions:</h2>
    <ul>
      <li><strong>One platform, separate products:</strong> Shared foundations reduce repeated work, but each product keeps its own source, environments, data boundaries, release decisions, and customer experience.</li>
      <li><strong>Milestones before platform sprawl:</strong> Reuse is extracted after a real second use case appears. This prevents elegant abstractions from outrunning customer value.</li>
      <li><strong>Human approval remains explicit:</strong> Agents can analyze, generate, test, and prepare evidence. They do not quietly replace ownership, production approval, or security judgment.</li>
      <li><strong>Private internals, portable outcomes:</strong> The implementation stays private, but generated products are designed to be understandable, independently maintainable, and transferable.</li>
      <li><strong>Standards should create leverage:</strong> A standard earns its place when it removes repeated decisions, improves safety, or makes the next contributor faster. Consistency alone is not the goal.</li>
    </ul>

    <h2>Result:</h2>
    <p>Product Factory provides a repeatable path from idea to an operable product foundation without pretending every product is identical. New work begins with established quality, ownership, observability, and delivery expectations, while product teams still have room to make the decisions that differentiate the experience.</p>

    <p>Together with MetadataDB, it creates a closed learning loop: the factory defines how products should begin and evolve, while the control plane records what actually exists, how it is connected, and what evidence supports its current state.</p>

    <h2>What This Demonstrates:</h2>
    <p>This case study demonstrates platform thinking at product scale. I can identify which decisions should become reusable infrastructure, which must remain product-specific, and how to create a system that accelerates delivery without hiding risk or ownership behind automation.</p>
    `
    },

    "solarBloomCommerce": {
        "title": "House of Solar Bloom: Building Luxury Editorial Commerce End to End",
        "imgSrc": "./house-of-solar-bloom.webp",
        "post": `
    <p><strong>Live site:</strong> <a href="https://houseofsolarbloom.com" target="_blank" rel="noopener noreferrer">houseofsolarbloom.com ↗</a></p>

    <h2>Situation:</h2>
    <p>Solar Bloom needed more than a conventional product grid. The brand lives at the intersection of high-performance botanical beauty, Art Deco restraint, travel, and editorial storytelling. A generic storefront would make the products purchasable, but it would flatten the world around them. The challenge was to create a site that could feel cinematic and distinctive while still behaving like a clear, trustworthy, production-ready commerce experience.</p>

    <p>The platform also had to support the operational realities behind the brand: secure checkout, product and set discovery, customer accounts, order memory, loyalty experiences, policies, journal publishing, responsive navigation, and search-friendly public pages. Every atmospheric decision still had to earn its place inside a fast path to purchase.</p>

    <h2>Task:</h2>
    <p>I designed and built House of Solar Bloom as an end-to-end commerce platform and brand system. My responsibility crossed product strategy, information architecture, interaction design, front-end engineering, commerce integration, identity, content structure, responsive behavior, deployment, and launch readiness.</p>

    <p>The core product question was: how do you make a luxury site feel like entering a house without making customers work to shop?</p>

    <h2>Action:</h2>
    <ul>
      <li><strong>Brand-to-interface system:</strong> Translated Solar Bloom's visual language into a reusable digital system: editorial typography, warm field photography, restrained ornament, numbered collections, cinematic transitions, and a palette that moves between sun, dusk, rainforest, and polished gold.</li>
      <li><strong>Editorial commerce architecture:</strong> Structured the homepage as a guided journey rather than a catalog dump. The experience moves from brand promise to ritual discovery, collection context, product wardrobe, membership, journal, and brand principles while keeping direct shopping paths visible.</li>
      <li><strong>Product discovery:</strong> Built dedicated collection, curated-set, and product experiences around real customer intents: face, hair, body, and complete rituals. Product naming and supporting copy stay expressive while practical details remain scannable.</li>
      <li><strong>Secure transaction flow:</strong> Integrated a basket and Stripe-hosted checkout so payment handling stays secure and familiar. Shopping safeguards, return expectations, and customer-care access are surfaced as part of the experience rather than hidden after purchase intent.</li>
      <li><strong>Identity and membership:</strong> Implemented Clerk-backed authentication for Blossom Club, creating a foundation for remembered orders, points, private offers, and member-specific experiences without forcing account creation into the public browsing journey.</li>
      <li><strong>Content platform:</strong> Added a journal with structured articles and RSS, allowing formula education, field notes, and ritual guidance to become durable acquisition and retention surfaces instead of disposable campaign copy.</li>
      <li><strong>Responsive interaction design:</strong> Designed the navigation, product cards, imagery, typography, cart controls, loading states, and account entry for both touch and desktop use. Motion supports orientation and atmosphere while reduced, clear states preserve usability.</li>
      <li><strong>Production foundations:</strong> Built the application with Next.js and production metadata, including social previews, descriptive page titles, a web manifest, semantic landmarks, meaningful image alternatives, and crawlable content.</li>
    </ul>

    <h2>Key Design Decisions:</h2>
    <ul>
      <li><strong>A house, not a funnel:</strong> The site invites exploration, but persistent collection and product paths keep discovery from becoming disorientation.</li>
      <li><strong>Luxury through restraint:</strong> The interface relies on proportion, typography, photography, pacing, and detail instead of stacking decorative effects onto every surface.</li>
      <li><strong>Trust inside the aesthetic:</strong> Checkout provider, returns, customer care, basket state, and product context remain explicit. Atmosphere never substitutes for information.</li>
      <li><strong>Membership as a room:</strong> Blossom Club is integrated into the brand mythology, but implemented as a real authenticated product surface capable of growing beyond a marketing signup.</li>
      <li><strong>Content as product infrastructure:</strong> The journal and formula storytelling are part of the platform architecture, supporting education, organic discovery, and long-term brand depth.</li>
    </ul>

    <h2>Result:</h2>
    <ul>
      <li><strong>Production launch:</strong> Shipped a complete customer-facing commerce site at <a href="https://houseofsolarbloom.com" target="_blank" rel="noopener noreferrer">houseofsolarbloom.com</a>.</li>
      <li><strong>Unified experience:</strong> Brand storytelling, product education, shopping, checkout, membership, policies, and editorial content now live inside one coherent system.</li>
      <li><strong>Secure commerce foundation:</strong> Stripe checkout and Clerk identity provide established transaction and authentication boundaries while the product retains a custom brand experience.</li>
      <li><strong>Expandable platform:</strong> The architecture supports new products, sets, journal entries, member benefits, and campaign surfaces without rebuilding the storefront for each release.</li>
      <li><strong>Distinct digital identity:</strong> Solar Bloom launched with an experience that looks and behaves like its own house, not a reskinned commerce template.</li>
    </ul>

    <h2>What This Project Demonstrates:</h2>
    <p>This project shows how I work when product, design, architecture, and implementation cannot be separated. I can move from a brand thesis to a navigable information model, from interaction language to reusable components, and from a visual launch surface to the less-visible systems that make checkout, identity, content, SEO, and operations reliable.</p>

    <p>The strongest outcome is not any single page. It is the coherence between them: the same product thinking governs the cinematic homepage, the practical basket, the private member room, the policy pages, and the journal. That coherence is what turns a collection of features into a product.</p>
    `
    },

    "about": {
        "title": "About Alia",
        "imgSrc": "./infoposts/alia-digital-nomad-portrait.jpeg",
        "post": `
    <p>Hi, I'm Alia.</p>

    <p>I'm a Principal Engineer and AWS Certified Solutions Architect based in Southern California. I contribute to technical direction, take designs through architecture review, build the proof, and lead the platform work required to make it real.</p>

    <p>I focus on the foundation layer: release orchestration, self-service platforms, CI/CD, infrastructure as code, and developer environments. Much of it is turning team knowledge into documented, automated, repeatable systems.</p>

    <p>At Transamerica, I'm a Principal Engineer on the Architecture team. I partner with architecture leadership and delivery teams to reinforce technical direction for WFG Digital, bring designs through the Architecture Review Board, test ideas through POCs, and carry the strongest ones through governance, implementation, adoption, and release. I contribute to AWS patterns, Terraform standards, infrastructure testing approaches, and internal tooling that teams adopt because it makes their work easier. I have also hired engineers and led platform teams, so I understand the work as both a technical system and a team that has to operate it. Before that, I helped shape ALM modernization, cloud data architecture, and engineering standards across hedging and analytics business units.</p>

    <p>At AWS Professional Services, I consulted on cloud migration architecture, cost optimization, and delivery system design for enterprise clients. At loanDepot, I led release engineering through pandemic-era hypergrowth - automating the orchestration of 1200+ components, cutting multi-hour release windows down to predictable, dependency-aware automated deployments, and building the custom CMDB that mapped ownership and deployable relationships across the org.</p>

    <p>The question behind my work: what can I build now that makes the next team faster? I'm drawn to the work that sits between code, infrastructure, process, and people - where a good answer has to be understandable, repeatable, secure, and practical enough for teams to trust after the architect leaves the room.</p>

    <p>My current focus is AI-assisted developer workflows and agentic tooling. I ship outside work too, on my own platform: Product Factory generates each product with infrastructure as code, pipelines, and release gates, and MetadataDB is the control plane for ownership, deployments, and cost. NomadTime and House of Solar Bloom ship through it.</p>

    <p>I grew up near the border in Southern California and spent years teaching English in Colombia. Those experiences shaped how I lead: assume intelligence, explain clearly, make room for questions, and help people build confidence through useful structure rather than authority.</p>

    <p>Outside of engineering, I'm drawn to travel, anthropology, architecture, art, and the emotional atmosphere of places. I feel most alive exploring unfamiliar cities, wandering museums, or discovering the details that make cultures feel real. That curiosity shows up in my engineering too - I want to understand why systems were built the way they were before I redesign them.</p>

    <p>If you're building a team or platform where strong systems design matters upfront - not after the first outage - I'd like to talk.</p>
    `
    }
}
