# kazirifatmorshed.github.io
 Personal Webpage


  Here is how to run Jekyll locally on your machine:
  
  ### 1. Build the Tailwind CSS first
  
  Before starting Jekyll, build the CSS bundle:
  
    npm run build:css
    ──────
  ### 2. Run Jekyll Local Server
  
  Run the following command in your terminal:
  
    bundle exec jekyll serve
  
  │ Tip (Live Reload): To automatically refresh your browser when modifying layout/HTML files:      
  │
  │   bundle exec jekyll serve --livereload
  │
  Once started, open your browser and navigate to:
  👉 http://localhost:4000
  ──────
  ### 💡 Workflow while making changes
  
  If you are editing styles or HTML active during development, run these two commands in separate   
  terminal tabs/windows:
  
  • Terminal 1 (Auto-rebuild Tailwind CSS on changes):
    npm run watch:css
  
  • Terminal 2 (Jekyll Server):
    bundle exec jekyll serve --livereload
****