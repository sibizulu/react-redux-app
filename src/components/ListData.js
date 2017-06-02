import React from 'react'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Subheader from 'material-ui/Subheader'

const ListData = ({title, listing, onClickAddToFav}) => (
  <div>
    {listing.length > 0 &&
    <List>
      <Subheader>Latest Post</Subheader>
      {listing.reverse().map((listItem, index) =>
        <div key={index}>
          <ListItem
            primaryText={listItem.title}
            primaryTogglesNestedList
            secondaryText={listItem.body}
            secondaryTextLines={2}
            key={index}
            onClick={() => onClickAddToFav(listItem.text, index)}
        />
          <Divider inset />
        </div>
      )}
    </List>
  }
  </div>
)

export default ListData
