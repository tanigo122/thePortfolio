const desin_tools = [
    {tool: "Canva"},
    {tool:"Figma"},
    {tool: "Adobe"},
    {tool: "iStocs"},
    {tool: "AI"}
  ];
  
  const developer_tool = [
    {tool: "VS code"},
    {tool: "Sublime Text"},
    {tool: "Netlify"},
    {tool: "Github"}
  ];
  
  let tools1 = document.querySelector(".toold");
  let tools2 = document.querySelector(".toolf");
  
  let dev = "";
  desin_tools.forEach(value => {
     dev += `<p class="toolsItem">${value.tool}</p>`;
  });
  tools1.innerHTML = dev;
  
  let html = "";
  developer_tool.forEach(value => {
     html += `<p class="toolsItem">${value.tool}</p>`;
  });
  tools2.innerHTML = html;
  