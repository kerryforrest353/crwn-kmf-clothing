import React from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview.components";
import CollectionPage from "../collection/collection.component";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;

// component class...original data connection
// import React from "react";
// import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";

// import CollectionPreview from "../../components/collection-preview/collection-preview.component";

// import { selectCollections } from "../../redux/shop/shop.selectors";
// import SHOP_DATA from "./shop.data.js";

// class ShopPage extends React.Component {
// constructor(props) {
//   super(props);

//   this.state = {
//     collections: SHOP_DATA,
//   };
// }

//   render() {
//     const { collections } = this.state;
//     return (
//       <div className="shop-page">
//         {collections.map(({ id, ...otherCollectionProps }) => (
//           <CollectionPreview key={id} {...otherCollectionProps} />
//         ))}
//       </div>
//     );
//   }
// }
// const mapStateToProps = createStructuredSelector({
//   collections: selectCollections,
// });

// export default connect(mapStateToProps)(ShopPage);

// export default ShopPage;
