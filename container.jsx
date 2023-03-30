/*** @jsx React.DOM*/
Container = React.createClass
({ getInitialState: function(sectionList)
{ 
return { openSectionIndex: -1 } }, 
buildSections: function(sectionList){ 
var sections = sectionList.map(this.buildSection)
return sections; 
}, 
buildSection: function(section, index)
{ 
var openStatus = (index === this.state.openSectionIndex); 
/* Remember to add a 'key'. 
React wants you to add an identifier when 
you instantiate a component multiple times */ 
return <Section key={index} data={section} toggleOne={this.toggleOne} open={openStatus} /> }, 
toggleOne: function(id){ 
if(this.state.openSectionIndex === id){ this.setState({openSectionIndex: -1}); } 
else { this.setState({openSectionIndex: id}); } }, 
render: function() 
{ var sections = this.buildSections(this.props.data); return ( 
<div className="container"> {sections} </div> ); 
}})
