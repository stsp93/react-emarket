export default function showLoading(updateModal, closeModal) {
                // Show Loading and remove it after 2s
                updateModal('Loading');

                setTimeout(() => {
                    closeModal()
                }, 2000)
}