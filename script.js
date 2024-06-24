function confirmRegistration() {
    return confirm("Are you sure you want to create a new account?");
}

function showCategory(category) {
    // Hide all category sections
    document.getElementById('men-category').style.display = 'none';
    document.getElementById('women-category').style.display = 'none';
    document.getElementById('kids-category').style.display = 'none';

    // Show the selected category
    document.getElementById(category + '-category').style.display = 'block';
}

function removeItem(button) {
    var listItem = button.parentNode;
    listItem.parentNode.removeChild(listItem);
}

function confirmFeedback() {
    return confirm("Are you sure you want to submit this feedback?");
}
