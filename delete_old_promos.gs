function deleteOldPromotionsEmails() {
    // Define the search string to find emails in the Promotions category older than 30 days
    var searchString = 'category:promotions older_than:30d';
    
    // Get all threads matching the search string
    var threads = GmailApp.search(searchString);
    
    // Check if there are any threads to delete
    if (threads.length > 0) {
        // Move threads to trash
        GmailApp.moveThreadsToTrash(threads);
        Logger.log("Moved " + threads.length + " threads to trash.");
    } else {
        Logger.log("No threads found matching the criteria.");
    }
}