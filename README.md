## TASK
Implement items management system using angular 1.x and provided [mocks](/mocks.zip) as a reference . Source code should be saved on GitHub with all local commits.

####Pages:
1. Items table view.
2. Items tile view.
3. Create/edit item.

####Global requirements:
1. All pages should have navigation bar that highlights current page.
2. At least two pages worth of items should be available on app start.
3. Items added by user are persisted after page reload.
4. The app should work at least in the last version of the following browsers: Google Chrome, Mozilla Firefox, Microsoft Edge.
5. Same page should be opened after reload.
6. Every page should have unique URL (like /items?view=table, /items/:id and so on).
7. Use backend-less development with $httpBackend ([AngularJS $httpBackend docs](https://docs.angularjs.org/api/ngMockE2E/service/$httpBackend)).
8. Use Bootstrap for implementing UI.


####Pages 1 and 2 should:
1. Display items in corresponding manner (table or tiles).
2. Have pagination. It should be possible to change items per page and current page.
3. Provide text search by all visible text properties.
4. Open "Create/edit item" page when clicking on item title.

####Page 3 should:
1. Allow to add or edit items. Adding mode is opened by clicking on navbar "Create/edit item" button, edit mode is opened by clicking on item title on either of two view pages.
2. Require validation. All fields should be at least required. Extra validation rules like numbers only, max length, pattern matching and so on are welcome.
3. Open table view after successful saving, deleting or canceling.
4. Allow to reset changes in edit mode. If no changes were made, the button should be disabled.
5. Be able to delete edited item. User should be prompted if he really wants to remove the item with modal dialog.
6. Be able to change item image. Image can be select either by dropping it into designated area or file select prompt that appears after clicking on it. Image is required.
